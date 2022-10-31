import { PostContext } from 'components/organisms/Post/logic'

import useAppSelector from 'hooks/useAppSelector'

import { ILike } from '@common/types/likes/models/likeModel.types'

import { useContext, useState } from 'react'
import { api } from 'services/api'

const usePostActions = () => {
  const { post } = useContext(PostContext)
  const [liked, setLiked] = useState(post.liked)
  const { user } = useAppSelector(({ userStore }) => userStore)

  const onHeartClick = async () => {
    if (user?.id) {
      const like: ILike = { user_id: user?.id, post_id: post.id }

      try {
        if (liked)
          await api.delete('/likes', {
            data: like,
            headers: { Authorization: `Bearer ${user?.token}` }
          })
        else
          await api.post('/likes', like, {
            headers: { Authorization: `Bearer ${user?.token}` }
          })

        setLiked(!liked)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return { liked, onHeartClick }
}

export { usePostActions }
