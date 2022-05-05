import { useState } from 'react'

const useTooltip = () => {
  const [isHovering, setIsHovering] = useState(false)

  const onTriggerMouseEnter = () => {
    setIsHovering(true)
  }

  const onTriggerMouseLeave = () => {
    setIsHovering(false)
  }

  return { isHovering, onTriggerMouseEnter, onTriggerMouseLeave }
}

export { useTooltip }
