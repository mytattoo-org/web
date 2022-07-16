import type { TUseResizable } from './types'

import { DragHandlers, useMotionValue } from 'framer-motion'
import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

const useResizable: TUseResizable = ({
  ref,
  maxWidth,
  minWidth,
  initialWidth,
  realCondition
}) => {
  const constraintsRef = useRef(null)
  const [condition, setCondition] = useState(true)
  const resizableWidth = useMotionValue(initialWidth || minWidth)

  const handleDrag: DragHandlers['onDrag'] = (_event, info) => {
    const distance = info.delta.x < 0 ? info.delta.x * 6 : info.delta.x * 3
    const newWidth = resizableWidth.get() - distance
    const newSizeIsBetween = newWidth > minWidth && newWidth < maxWidth

    if (newSizeIsBetween) resizableWidth.set(resizableWidth.get() - distance)
  }

  const resetSize = useCallback(() => {
    resizableWidth.set(initialWidth || minWidth)
  }, [initialWidth, minWidth, resizableWidth])

  useImperativeHandle(ref, () => ({ resetSize }), [resetSize])

  useEffect(
    () =>
      globalThis.addEventListener('resize', () => {
        resizableWidth.set(initialWidth || minWidth)
      }),
    [initialWidth, minWidth, resizableWidth]
  )

  useEffect(() => {
    realCondition !== undefined
      ? setCondition(realCondition)
      : setCondition(true)
  }, [realCondition])

  return { handleDrag, resizableWidth, constraintsRef, condition }
}

export { useResizable }
