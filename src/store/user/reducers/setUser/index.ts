import type { TSetUser } from './types'

const setUser: TSetUser = (state, action) => {
  state.user = action.payload
}

export default setUser
