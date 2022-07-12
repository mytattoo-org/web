import { useResizable } from './logic'
import { ResizableStyle } from './styles'
import type { IResizableProps } from './types'

import HorizontalResizer from '../Icon/icons/HorizontalResizer'

import composeClassName from 'utils/composeClassName'

import { motion } from 'framer-motion'

const Resizable = ({
  children,
  minWidth,
  maxWidth,
  className,
  initialWidth
}: IResizableProps) => {
  const { handleDrag, resizableWith, constraints } = useResizable({
    minWidth,
    maxWidth,
    initialWidth
  })

  return (
    <ResizableStyle className={composeClassName('Resizable', className)}>
      <motion.div
        drag='x'
        dragElastic={0}
        className='Handle'
        onDrag={handleDrag}
        dragMomentum={false}
        dragConstraints={constraints}
      >
        <HorizontalResizer />
      </motion.div>

      <motion.div style={{ width: resizableWith }} className='Content'>
        {children}
      </motion.div>
    </ResizableStyle>
  )
}

export { Resizable }
