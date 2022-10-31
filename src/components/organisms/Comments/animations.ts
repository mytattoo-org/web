import { framerProps, transition } from 'utils/framerMotion/defaults'

import { MotionProps, Variants } from 'framer-motion'

const commentsAnimations: MotionProps = {
  exit: { opacity: 0, height: 0, y: -30, transition: transition }
}

const ulAnimationProps = {
  ...framerProps,
  variants: {
    enter: {
      marginTop: 16,
      height: 'auto',
      transition: { staggerChildren: 0.1, ...transition }
    },
    exit: {
      marginTop: 0,
      height: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        ...transition
      }
    },
    initial: { height: 0, marginTop: 0 }
  }
}

const liVariants: Variants = {
  enter: { y: 0, opacity: 1, transition },
  exit: { opacity: 0 },
  initial: { y: 30, opacity: 0 }
}

export { ulAnimationProps, liVariants, commentsAnimations }
