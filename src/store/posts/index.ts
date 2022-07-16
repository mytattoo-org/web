import { IPostStore } from './types'

import { createPostExtraReducers } from './extraReducers/createPost'
import { readFeedExtraReducers } from './extraReducers/readFeed'
import { update } from './reducers/update'

import type { TExtraReducers } from 'typescript/redux.types'

import { createSlice } from '@reduxjs/toolkit'

const initialState: IPostStore = {
  loading: undefined,
  feed: { posts: [] }
}

const extraReducers: TExtraReducers<IPostStore> = builder => {
  createPostExtraReducers(builder), readFeedExtraReducers(builder)
}

const postStore = createSlice({
  initialState,
  extraReducers,
  name: 'postStore',
  reducers: { update }
})

export { postStore }
