import { TVerifyAuthentication } from './types'

import { IUserStore } from '../../types'

import { TExtraReducers } from 'typescript/redux.types'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'api'

const verifyAuthentication: TVerifyAuthentication = async (_, { getState }) => {
  try {
    const { userStore } = getState()

    if (userStore.user !== undefined) return userStore.user

    const token = localStorage.getItem('@MyTattoo-token')

    if (!token) return undefined

    const { data } = await api.get('/user', {
      headers: { Authorization: `Bearer ${token}` }
    })

    return data.user
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.error
        ? error.response.data.error
        : 'Error inesperado tente novamente mais tarde'
    )
  }
}

const verifyAuthenticationThunk = createAsyncThunk(
  'userStore/verify-authentication',
  verifyAuthentication
)

const verifyAuthenticationExtraReducers: TExtraReducers<IUserStore> = ({
  addCase
}) => {
  addCase(verifyAuthenticationThunk.pending, state => ({
    ...state,
    loading: true
  }))

  addCase(verifyAuthenticationThunk.fulfilled, (state, { payload }) => ({
    ...state,
    user: payload,
    loading: false
  }))

  addCase(verifyAuthenticationThunk.rejected, state => ({
    ...state,
    loading: false
  }))
}

export { verifyAuthenticationThunk, verifyAuthenticationExtraReducers }
