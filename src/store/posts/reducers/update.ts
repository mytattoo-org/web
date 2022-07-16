import { IPostStore } from '../types'

import { TReducer } from 'typescript/redux.types'

const update: TReducer<IPostStore, IPostStore> = (state, { payload }) => {
  state = { ...state, ...payload }
}

export { update }
