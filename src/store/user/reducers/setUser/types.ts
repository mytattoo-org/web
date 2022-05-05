import type { TReducer } from 'store/types'
import type { IUserStore } from 'store/user/types'

type TSetUser = TReducer<IUserStore, IUserStore['user']>

export type { TSetUser }
