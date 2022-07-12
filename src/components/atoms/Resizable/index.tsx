import { useResizable } from './logic'
import { ResizableStyle } from './styles'
import type { IResizableProps } from './types'

import HorizontalResizer from '../Icon/icons/HorizontalResizer'

import composeClassName from 'utils/composeClassName'

import { motion } from 'framer-motion'
import { useRef } from 'react'

const Resizable = ({
  children,
  minWidth,
  maxWidth,
  className,
  initialWidth
}: IResizableProps) => {
  const { handleDrag, resizableWith } = useResizable({
    minWidth,
    maxWidth,
    initialWidth
  })

  const constraintsRef = useRef(null)

  return (
    <ResizableStyle className={composeClassName('Resizable', className)}>
      <div className='Handle' ref={constraintsRef}>
        <motion.div
          drag='x'
          dragElastic={0}
          onDrag={handleDrag}
          dragMomentum={false}
          dragConstraints={constraintsRef}
        >
          <HorizontalResizer />
        </motion.div>
      </div>

      <motion.div style={{ width: resizableWith }} className='Content'>
        {children}
      </motion.div>
    </ResizableStyle>
  )
}

export { Resizable }
