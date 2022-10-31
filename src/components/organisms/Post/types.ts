import { ICreateCommentRequest } from '@common/types/comments/useCases/createComment.types'
import type { IFeed } from '@common/types/posts/models/feedModel.types'

import { HTMLAttributes } from 'react'
import { IComment } from 'services/api/comments/types'

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
  post: IFeed & { comments: IComment[] }
}

export type { IPostProps, IPostContext, IUsePostParams, TAddComment }
