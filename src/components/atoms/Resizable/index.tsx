import { useResizable } from './logic'
import { ResizableStyle } from './styles'
import type { IForwardedResizable, IResizableProps } from './types'

import HorizontalResizer from '../Icon/icons/HorizontalResizer'
import Presence from '../Presence'

import composeClassName from 'utils/composeClassName'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const Resizable = forwardRef<IForwardedResizable, IResizableProps>(
  (
    {
      children,
      minWidth,
      maxWidth,
      className,
      initialWidth,
      condition: realCondition = true
    },
    ref
  ) => {
    const { handleDrag, resizableWidth, condition, constraintsRef } =
      useResizable({ minWidth, maxWidth, initialWidth, realCondition, ref })

    return (
      <>
        <Presence condition={condition}>
          <ResizableStyle
            ref={ref as any}
            className={composeClassName('Resizable', className)}
          >
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

            <motion.div style={{ width: resizableWidth }} className='Content'>
              {children}
            </motion.div>
          </ResizableStyle>
        </Presence>

        {!condition && children}
      </>
    )
  }
)

export { Resizable }
