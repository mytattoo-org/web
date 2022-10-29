import { PostContext } from 'components/organisms/Post'

import useAppSelector from 'hooks/useAppSelector'

import { ILike } from '@common/types/likes/models/likeModel.types'

import { api } from 'api'
import { useContext, useState } from 'react'

const usePostActions = () => {
  const postContext = useContext(PostContext)
  const [liked, setLiked] = useState(postContext.liked)
  const { user } = useAppSelector(({ userStore }) => userStore)

  const onHeartClick = async () => {
    if (user?.id) {
      const like: ILike = { user_id: user?.id, post_id: postContext.id }

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
