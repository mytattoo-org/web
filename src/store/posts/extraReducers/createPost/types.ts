import { TStoreState } from 'typescript/redux.types'

import { IFeed } from '@common/types/posts/models/feedModel.types'
import { ICreatePostRequest } from '@common/types/posts/useCases/createPost.types'

import { AsyncThunkPayloadCreator } from '@reduxjs/toolkit'

type TCreatePost = AsyncThunkPayloadCreator<
  { createdPost?: IFeed; error?: string; loading?: boolean },
  Omit<ICreatePostRequest, 'user_id'>,
  { state: TStoreState }
>

export type { TCreatePost }
