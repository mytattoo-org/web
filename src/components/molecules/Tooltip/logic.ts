import { useState } from 'react'

const useTooltip = () => {
  const [isHovering, setIsHovering] = useState(false)

  const onTriggerMouseEnter = () => {
    setIsHovering(true)
  }

  const onTriggerMouseLeave = () => {
    setIsHovering(false)
  }

  const onTriggerClick = () => {
    setIsHovering(prev => !prev)
  }

  return {
    isHovering,
    onTriggerClick,
    onTriggerMouseEnter,
    onTriggerMouseLeave
  }
}

export { useTooltip }
