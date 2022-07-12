import type { TUseResizable } from './types'

import { useMotionValue } from 'framer-motion'
import { useCallback, useEffect } from 'react'

const useResizable: TUseResizable = ({ maxWidth, minWidth, initialWidth }) => {
  const resizableWith = useMotionValue(initialWidth || 0)
  let constraints = { top: 0, left: 0, right: 0, bottom: 0 }

  const handleDrag = useCallback(
    (_event: any, info: any) => {
      const distance = info.delta.x < 0 ? info.delta.x * 6 : info.delta.x * 3

      const newWidth = resizableWith.get() - distance

      if (newWidth > minWidth && newWidth < maxWidth) {
        resizableWith.set(resizableWith.get() - distance)
      }

      console.log(resizableWith.get(), constraints)
    },
    [maxWidth, minWidth, resizableWith]
  )

  useEffect(
    () =>
      globalThis.addEventListener('resize', () => {
        resizableWith.set(minWidth)
        constraints = { top: 0, left: 0, right: 0, bottom: 0 }
      }),
    []
  )

  return { handleDrag, resizableWith, constraints }
}
export { useResizable }
