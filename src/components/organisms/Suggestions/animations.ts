import type { TUlAnimation } from './types'

import { AnimatePresenceProps, MotionProps, Transition } from 'framer-motion'

const li: MotionProps = {
  transition: {
    bounce: 0.3,
    duration: 0.3,
    type: 'spring'
  },
  variants: {
    exit: { opacity: 0, x: 500 },
    animate: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: 500 }
  }
}

const presence: AnimatePresenceProps = {
  initial: false
}

const ul: TUlAnimation = itemsQuantity => {
  const staggerChildrenTime = 0.1

  const commonTransition: Transition = {
    type: 'tween',
    staggerChildren: staggerChildrenTime,
    duration: itemsQuantity * staggerChildrenTime
  }

  return {
    exit: 'exit',
    initial: 'initial',
    animate: 'animate',
    variants: {
      initial: { height: 0 },
      animate: {
        height: 'auto',
        transition: commonTransition
      },
      exit: {
        height: 0,
        transition: {
          staggerDirection: -1,
          delay: staggerChildrenTime,
          ...commonTransition
        }
      }
    }
  }
}

const animations = { ul, li, presence }

export { animations }
