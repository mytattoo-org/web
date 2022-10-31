import { PostContext } from '../Post/logic'

import { useContext, useState } from 'react'

const usePostFooter = () => {
  const [commenting, setIsCommenting] = useState(false)
  const [showingStyles, setShowingStyles] = useState(false)

  const { post, getComments } = useContext(PostContext)

  const onBalloonClick = async () => {
    setIsCommenting(prev => !prev)

    await getComments()
  }

  const onHashtagClick = () => {
    setShowingStyles(prev => !prev)
  }

  return {
    commenting,
    showingStyles,
    onBalloonClick,
    onHashtagClick,
    comments: post.comments
  }
}

export { usePostFooter }
