import { useResizable } from './logic'
import { ResizableStyle } from './styles'
import type { IResizableProps } from './types'

import HorizontalResizer from '../Icon/icons/HorizontalResizer'
import Presence from '../Presence'

import composeClassName from 'utils/composeClassName'

import { motion } from 'framer-motion'

const Resizable = ({
  children,
  minWidth,
  maxWidth,
  className,
  initialWidth,
  condition: realCondition = true
}: IResizableProps) => {
  const { handleDrag, resizableWith, condition, constraintsRef } = useResizable(
    { minWidth, maxWidth, initialWidth, realCondition }
  )

  return (
    <>
      <Presence condition={condition}>
        <ResizableStyle className={composeClassName('Resizable', className)}>
          <div className='Handle' ref={constraintsRef}>
            <motion.div
              drag='x'
              dragElastic={0}
              onDrag={handleDrag}
              dragMomentum={false}
              dragConstraints={constraintsRef || null}
            >
              <HorizontalResizer />
            </motion.div>
          </div>

          <motion.div style={{ width: resizableWith }} className='Content'>
            {children}
          </motion.div>
        </ResizableStyle>
      </Presence>

      <>{!condition && children}</>
    </>
  )
}

export { Resizable }
