import { ICommentUser } from '@common/types/comments/models/commentUserModel'
import { ICreateCommentRequest } from '@common/types/comments/useCases/createComment.types'
import type { IFeed } from '@common/types/posts/models/feedModel.types'

import { HTMLAttributes } from 'react'

type TAddComment = (content: ICreateCommentRequest['content']) => Promise<void>

interface IPostProps extends HTMLAttributes<HTMLDivElement> {
  postData: IFeed
  forwardedAs?: any
}

interface IUsePostParams {
  postData: IFeed
}

interface IPostContext {
  addComment: TAddComment
  getComments: () => Promise<void>
  post: IFeed & { comments: ICommentUser[] }
}

export type { IPostProps, IPostContext, IUsePostParams, TAddComment }
