import { IUserStore } from '../types'

import { TReducer } from 'typescript/redux.types'

const logout: TReducer<IUserStore> = state => {
  state.user = undefined
  localStorage.removeItem('@MyTattoo-token')
}

export { logout }
