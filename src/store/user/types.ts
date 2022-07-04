import { IUserModel } from '@common/types/users/models/userModel.types'

interface IUserStore {
  loading?: boolean
  user?: Omit<Partial<IUserModel>, 'password' | 'avatar'> & {
    token?: string
    avatar?: string
  }
}

export type { IUserStore }
