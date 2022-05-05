import { useState } from 'react'

const usePostActions = () => {
  const [liked, setLiked] = useState(false)

  const onHeartClick = () => {
    setLiked(prev => !prev)
  }

  return { liked, onHeartClick }
}

export { usePostActions }
