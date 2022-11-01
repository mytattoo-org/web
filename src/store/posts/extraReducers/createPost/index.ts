import type { TCreatePost } from './types'

import { IPostStore } from 'store/posts/types'

import { TExtraReducers } from 'typescript/redux.types'

import { TCreatePostResponse } from '@common/types/posts/useCases/createPost.types'

import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { api } from 'services/api'

const createPost: TCreatePost = async (data, { getState }) => {
  const { userStore } = getState()

  if (!userStore.user?.token)
    return { error: 'Token de usuário não encontrado' }

  try {
    const response: AxiosResponse<TCreatePostResponse> = await api.post(
      '/posts',
      data,
      { headers: { Authorization: `Bearer ${userStore.user?.token}` } }
    )

    const { createdFeed } = response.data

    if (!createdFeed) return { error: 'Sem resposta' }

    return { createdPost: createdFeed }
  } catch (error: any) {
    return { error: 'Error inesperado tente novamente mais tarde' }
  }
}

const createPostThunk = createAsyncThunk('postsStore/createPost', createPost)

const createPostExtraReducers: TExtraReducers<IPostStore> = ({ addCase }) => {
  addCase(createPostThunk.pending, state => ({ ...state, loading: true }))

  addCase(createPostThunk.fulfilled, (state, { payload }) => {
    const newFeed = state.feed

    if (payload.createdPost) newFeed?.unshift(payload.createdPost)

    return { ...state, feed: newFeed, loading: false }
  })

  addCase(createPostThunk.rejected, state => ({
    ...state,
    loading: false
  }))
}

export { createPostExtraReducers, createPostThunk }
