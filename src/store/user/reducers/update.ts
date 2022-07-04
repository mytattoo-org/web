import { IUserStore } from '../types'

import { TReducer } from 'typescript/redux.types'

const update: TReducer<IUserStore, IUserStore['user']> = (
  state,
  { payload }
) => {
  state.user = { ...state.user, ...payload }
}

export { update }
