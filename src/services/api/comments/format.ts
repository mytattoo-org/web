import { IComment } from './types'

import { ICommentUser } from '@common/types/comments/models/commentModel'

export const formatComment = ({
  avatar,
  user_id,
  username,
  ...comment
}: ICommentUser): IComment => ({
  ...comment,
  author: { avatar, username, id: user_id }
})

export const formatComments = (comments?: ICommentUser[]): IComment[] =>
  comments?.map(formatComment) || []
