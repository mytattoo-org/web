import type { TUseResizable } from './types'

import { DragHandlers, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

const useResizable: TUseResizable = ({ maxWidth, minWidth, initialWidth }) => {
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

  return { handleDrag, resizableWith }
}
export { useResizable }
