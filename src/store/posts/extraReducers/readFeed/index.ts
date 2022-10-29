import type { TReadFeed } from './types'

import { IPostStore } from 'store/posts/types'

import { TExtraReducers } from 'typescript/redux.types'

import { TFeedResponse } from '@common/types/posts/useCases/readFeed.types'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'api'
import { AxiosResponse } from 'axios'

const readFeed: TReadFeed = async (_, { getState }) => {
  const user = getState().userStore.user

  console.log(getState())

  try {
    const response: AxiosResponse<TFeedResponse> = user
      ? await api.get('/feed', {
          headers: { Authorization: `Bearer ${user.token}` }
        })
      : await api.get('/feed')

    const posts = response.data.posts

    return { feed: { posts: posts || [] } }
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.error
        ? error.response.data.error
        : 'Error inesperado tente novamente mais tarde'
    )
  }
}

const readFeedThunk = createAsyncThunk('postsStore/readFeed', readFeed)

const readFeedExtraReducers: TExtraReducers<IPostStore> = ({ addCase }) => {
  addCase(readFeedThunk.pending, state => ({ ...state, loading: true }))

  addCase(readFeedThunk.fulfilled, (state, { payload }) => ({
    ...state,
    ...payload,
    loading: false
  }))

  addCase(readFeedThunk.rejected, state => ({
    ...state,
    loading: false
  }))
}

export { readFeedExtraReducers, readFeedThunk }
