import { IUserStore } from '../../types'
import verifyAuthentication from './verifyAuthentication'

import { TExtraReducers } from 'typescript/redux.types'

import { createAsyncThunk } from '@reduxjs/toolkit'

export const verifyAuthenticationThunk = createAsyncThunk(
  'user/verify-authentication',
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
    user: payload || state.user,
    loading: false
  }))

  addCase(verifyAuthenticationThunk.rejected, state => ({
    ...state,
    loading: false
  }))
}

export default verifyAuthenticationExtraReducers
