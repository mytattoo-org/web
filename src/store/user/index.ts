import { IUserStore } from './types'

import setUser from './reducers/setUser'

import { createSlice } from '@reduxjs/toolkit'

const initialState: IUserStore = {}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: { setUser: setUser }
})

export default user
