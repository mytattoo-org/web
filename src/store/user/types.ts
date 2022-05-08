import type { IUserModel } from '../../../submodules/common/src/types/users/userModel.types'

interface IUserStore {
  user?: Partial<IUserModel>
}

export type { IUserStore }
