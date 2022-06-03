import { IUserStore } from '../../types'
import signIn from './signIn'

import { TExtraReducers } from 'typescript/redux.types'

import { createAsyncThunk } from '@reduxjs/toolkit'

export const signInThunk = createAsyncThunk('user/sign-in', signIn)

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

export default signInExtraReducers
