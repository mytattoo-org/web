import type { TSignIn } from './types'

import { IUserStore } from '../../types'

import { TExtraReducers } from 'typescript/redux.types'

import { TSignInResponse } from '@common/types/authentication/useCases/signIn.types'
import { TReadUsersResponse } from '@common/types/users/useCases/readUsers.types'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { api } from 'services/api'

const signIn: TSignIn = async data => {
  try {
    const response: AxiosResponse<TSignInResponse> = await api.post(
      `/auth/sign-in`,
      data
    )

    const { id, token } = response.data

    if (id && token) {
      const response: AxiosResponse<TReadUsersResponse> = await api.get(
        `/users/${id}`
      )

      const user = response.data.user

      localStorage.setItem('@MyTattoo-token', token)

      if (user) return { user: { token, ...user }, loading: false }
    }
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.error
        ? error.response.data.error
        : 'Error inesperado tente novamente mais tarde'
    )
  }

  return { loading: false, user: undefined }
}

const signInThunk = createAsyncThunk('userStore/sign-in', signIn)

const signInExtraReducers: TExtraReducers<IUserStore> = ({ addCase }) => {
  addCase(signInThunk.pending, state => ({ ...state, loading: true }))

  addCase(signInThunk.fulfilled, (state, { payload }) => ({
    ...state,
    ...payload,
    loading: false
  }))

  addCase(signInThunk.rejected, state => ({
    ...state,
    loading: false
  }))
}

export { signInExtraReducers, signInThunk }
