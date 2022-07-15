import { framerProps, transition } from 'utils/framerMotion/defaults'

import { Variants } from 'framer-motion'

const labelAnimationProps = (options: any[], index: number) => ({
  ...framerProps,
  variants: {
    initial: { width: 0, x: 200 },
    exit: {
      x: 200,
      width: 0,
      paddingLeft: 0,
      transition: { ...transition, delay: 0.1 * (options.length - index) }
    },
    enter: {
      x: 0,
      width: 'auto',
      paddingLeft: 16,
      transition: { ...transition, delay: 0.7 + 0.1 * index }
    }
  }
})

const itemAnimationProps = (options: any[], index: number) => {
  const iconsSize = 40
  const position = options.length - index
  const totalMove = iconsSize * position + iconsSize / 2

  const variants: Variants = {
    initial: { x: totalMove, scale: 0.7, opacity: 0 },
    enter: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { ...transition, delay: 0.4 + 0.1 * options.length }
    },
    exit: {
      opacity: 0,
      scale: 0.7,
      x: totalMove,
      transition: { ...transition, delay: 0.3 }
    }
  }

  return { ...framerProps, variants }
}

const sidebarItemAnimationProps = (options: any[], index: number) => ({
  ...framerProps,
  variants: {
    initial: { y: -60 * (index + 1), opacity: 0 },
    enter: { y: 0, opacity: 1, transition: { ...transition, delay: 0.3 } },
    exit: {
      opacity: 0,
      y: -60 * (index + 1),
      transition: { ...transition, delay: 0.3 + 0.1 * options.length }
    }
  }
})

export { labelAnimationProps, sidebarItemAnimationProps, itemAnimationProps }
