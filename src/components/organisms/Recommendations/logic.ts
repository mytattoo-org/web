import { useState } from 'react'

const useRecommendations = () => {
  const [show, setShow] = useState(true)

  const onArrowClick = () => {
    setShow(prev => !prev)
  }

  return { show, onArrowClick }
}

export { useRecommendations }
