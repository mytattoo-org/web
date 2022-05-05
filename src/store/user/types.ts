import type { IUserModel } from '@common/types/users/userModel.types'

interface IUserStore {
  user?: Partial<IUserModel>
}

export type { IUserStore }
