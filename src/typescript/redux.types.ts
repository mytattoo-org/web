import { store } from 'store/'

import {
  ActionReducerMapBuilder,
  AsyncThunkPayloadCreator,
  CaseReducer,
  PayloadAction
} from '@reduxjs/toolkit'

type TReducer<SliceState, Payload = SliceState> = CaseReducer<
  SliceState,
  PayloadAction<Payload>
>

type TExtraReducers<State> = (_builder: ActionReducerMapBuilder<State>) => void

type TStoreState = ReturnType<typeof store.getState>

type TStoreDispatch = typeof store.dispatch

type TPayloadCreator<Return, Params> = AsyncThunkPayloadCreator<
  Return,
  Params,
  { state: TStoreState; dispatch: TStoreDispatch }
>

export type {
  TReducer,
  TStoreState,
  TExtraReducers,
  TStoreDispatch,
  TPayloadCreator
}
