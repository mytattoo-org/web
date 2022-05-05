import store from '.'
import {
  ActionReducerMapBuilder,
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

export type { TExtraReducers, TReducer, TStoreDispatch, TStoreState }
