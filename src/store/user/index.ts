import { IUserStore } from './types'

import signInExtraReducers from './extraReducers/signIn'

import { TExtraReducers } from 'typescript/redux.types'

import { createSlice } from '@reduxjs/toolkit'

const initialState: IUserStore = {
  loading: false,
  user: undefined
}

const extraReducers: TExtraReducers<IUserStore> = builder => {
  signInExtraReducers(builder)
}

const user = createSlice({
  name: 'user',
  reducers: {},
  extraReducers,
  initialState
})

export { user }
