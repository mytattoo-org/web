import { ICommentModel } from '@common/types/comments/models/commentModel'
import { IUser } from '@common/types/users/models/userModel.types'

export interface IComment extends Omit<ICommentModel, 'user_id'> {
  author: {
    id: IUser['id']
    avatar: IUser['avatar']
    username: IUser['username']
  }
}
