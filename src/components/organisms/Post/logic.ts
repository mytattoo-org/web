import { IPostContext, IUsePostParams, TAddComment } from './types'

import { GlobalContext } from 'components/templates/MyApp'

import useAppSelector from 'hooks/useAppSelector'

import theme from 'styles/theme'

import {
  ICreateCommentRequest,
  TCreateCommentResponse
} from '@common/types/comments/useCases/createComment.types'
import {
  ICommentUser,
  IReadCommentsRequest,
  TReadCommentsResponse
} from '@common/types/comments/useCases/readComments.types'

import { AxiosResponse } from 'axios'
import { createContext, useContext, useState } from 'react'
import { api } from 'services/api'

export const PostContext = createContext({} as IPostContext)

export const usePost = ({ postData }: IUsePostParams) => {
  const { feedback } = useContext(GlobalContext)
  const [comments, setComments] = useState<ICommentUser[]>([])
  const user = useAppSelector(({ userStore }) => userStore.user)

  const getComments = async () => {
    const commentsReqData: IReadCommentsRequest = { post_id: postData.id }

    try {
      const res: AxiosResponse<TReadCommentsResponse> = await api.get(
        '/comments',
        { params: commentsReqData }
      )

      setComments(res.data.comments || [])
    } catch (error) {
      feedback?.trigger &&
        feedback?.trigger({
          title: 'Error',
          color: theme.colors.red,
          content: 'Erro inesperado tente novamente'
        })
    }
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

      setComments(prev => [res.data.createdComment, ...prev])
    } catch (error) {
      feedback?.trigger &&
        feedback?.trigger({
          title: 'Error',
          color: theme.colors.red,
          content: 'Erro inesperado tente novamente'
        })
    }
  }

  const postContextValue: IPostContext = {
    addComment,
    getComments,
    post: { ...postData, comments }
  }

  return { postContextValue }
}
