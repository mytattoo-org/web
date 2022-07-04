import { IUserModel } from '@common/types/users/models/userModel.types'

interface IUserStore {
  loading?: boolean
  user?: Omit<Partial<IUserModel>, 'password'> & { token?: string }
}

export type { IUserStore }
