import { IPostStore } from '../../types'

import { TStoreState } from 'typescript/redux.types'

import { AsyncThunkPayloadCreator } from '@reduxjs/toolkit'

type TReadFeed = AsyncThunkPayloadCreator<
  IPostStore,
  void,
  { state: TStoreState }
>

export type { TReadFeed }
