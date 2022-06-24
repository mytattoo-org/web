import { IUserStore } from './types'

import { signInExtraReducers } from './extraReducers/signIn'
import { verifyAuthenticationExtraReducers } from './extraReducers/verifyAuthentication'
import { logout } from './reducers/logout'

import type { TExtraReducers } from 'typescript/redux.types'

import { createSlice } from '@reduxjs/toolkit'

const initialState: IUserStore = {
  loading: false,
  user: undefined
}

const extraReducers: TExtraReducers<IUserStore> = builder => {
  signInExtraReducers(builder), verifyAuthenticationExtraReducers(builder)
}

const userStore = createSlice({
  name: 'userStore',
  initialState,
  extraReducers,
  reducers: { logout }
})

export { userStore }
