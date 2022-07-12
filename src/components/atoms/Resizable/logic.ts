import type { TUseResizable } from './types'

import { DragHandlers, useMotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const useResizable: TUseResizable = ({
  maxWidth,
  minWidth,
  initialWidth,
  realCondition
}) => {
  const constraintsRef = useRef(null)
  const [condition, setCondition] = useState(true)
  const resizableWith = useMotionValue(initialWidth || minWidth)

  const handleDrag: DragHandlers['onDrag'] = (_event, info) => {
    const distance = info.delta.x < 0 ? info.delta.x * 6 : info.delta.x * 3
    const newWidth = resizableWith.get() - distance
    const newSizeIsBetween = newWidth > minWidth && newWidth < maxWidth

    if (newSizeIsBetween) resizableWith.set(resizableWith.get() - distance)
  }

  useEffect(
    () =>
      globalThis.addEventListener('resize', () => {
        resizableWith.set(initialWidth || minWidth)
      }),
    [initialWidth, minWidth, resizableWith]
  )

  useEffect(() => {
    realCondition !== undefined
      ? setCondition(realCondition)
      : setCondition(true)
  }, [realCondition])

  return { handleDrag, resizableWith, constraintsRef, condition }
}

export { useResizable }
