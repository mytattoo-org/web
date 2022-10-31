import { IPostContext, IUsePostParams, TAddComment } from './types'

import useAppSelector from 'hooks/useAppSelector'

import {
  ICreateCommentRequest,
  TCreateCommentResponse
} from '@common/types/comments/useCases/createComment.types'
import {
  IReadCommentsRequest,
  TReadCommentsResponse
} from '@common/types/comments/useCases/readComments.types'

import { AxiosResponse } from 'axios'
import { createContext, useState } from 'react'
import { api } from 'services/api'
import { formatComment, formatComments } from 'services/api/comments/format'
import { IComment } from 'services/api/comments/types'

export const PostContext = createContext({} as IPostContext)

export const usePost = ({ postData }: IUsePostParams) => {
  const [comments, setComments] = useState<IComment[]>([])
  const user = useAppSelector(({ userStore }) => userStore.user)

  const getComments = async () => {
    const commentsReqData: IReadCommentsRequest = { post_id: postData.id }

    const res: AxiosResponse<TReadCommentsResponse> = await api.get(
      '/comments',
      { params: commentsReqData }
    )

    setComments(formatComments(res.data.comments))
  }

  const addComment: TAddComment = async content => {
    const createCommentRequest: ICreateCommentRequest = {
      content,
      user_id: user?.id,
      post_id: postData.id
    }

    try {
      const res: AxiosResponse<TCreateCommentResponse> = await api.post(
        '/comments',
        createCommentRequest,
        { headers: { Authorization: `Bearer ${user?.token}` } }
      )

      setComments(prev => [formatComment(res.data.createdComment), ...prev])
    } catch (error) {
      console.log('error')
    }
  }

  const postContextValue: IPostContext = {
    addComment,
    getComments,
    post: { ...postData, comments }
  }

  return { postContextValue }
}
