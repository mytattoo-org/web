import { useState } from 'react'

const usePostFooter = () => {
  const [commenting, setIsCommenting] = useState(false)
  const [showingStyles, setShowingStyles] = useState(false)

  const onBalloonClick = () => {
    setIsCommenting(prev => !prev)
  }

  const onTattooClick = () => {
    setShowingStyles(prev => !prev)
  }

  return { commenting, onBalloonClick, showingStyles, onTattooClick }
}

export { usePostFooter }
