import { IUserStore } from './types'

import signInExtraReducers from './extraReducers/signIn'
import verifyAuthenticationExtraReducers from './extraReducers/verifyAuthentication'
import { logout } from './reducers/logout'

import { TExtraReducers } from 'typescript/redux.types'

import { createSlice } from '@reduxjs/toolkit'

const initialState: IUserStore = {
  loading: false,
  user: undefined
}

const extraReducers: TExtraReducers<IUserStore> = builder => {
  signInExtraReducers(builder), verifyAuthenticationExtraReducers(builder)
}

const userStore = createSlice({
  name: 'user',
  initialState,
  extraReducers,
  reducers: { logout }
})

export { userStore }
