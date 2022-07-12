import theme from 'styles/theme'

import { Transition } from 'framer-motion'
import { darken } from 'polished'

const transition: Transition = { type: 'tween', duration: 0.3 }
const framerProps = { exit: 'exit', animate: 'enter', initial: 'initial' }

const navbarItemsAnimationProps = (options: any[], index: number) => ({
  ...framerProps,
  variants: {
    initial: { x: 40 * (options.length - index) },
    enter: {
      x: 0,
      transition: { ...transition, delay: 0.2 + 0.6 + 0.1 * options.length }
    },
    exit: {
      x: 40 * (options.length - index),
      transition: { ...transition, delay: 0.3 }
    }
  }
})

const sidebarAnimationProps = (options: any[], showSidebar: boolean) => ({
  animate: showSidebar ? 'open' : 'closed',
  variants: {
    open: {
      transition,
      height: 78 + 60 * options.length,
      backgroundColor: darken(0.05, theme.colors.background)
    },
    closed: {
      height: 0,
      backgroundColor: 'transparent',
      transition: { ...transition, delay: 0.6 + 0.1 * options.length }
    }
  }
})

const sidebarItemsAnimationProps = (options: any[], index: number) => ({
  ...framerProps,
  variants: {
    initial: { y: -60 * (index + 1) },
    enter: { y: 0, transition: { ...transition, delay: 0.3 } },
    exit: {
      y: -60 * (index + 1),
      transition: { ...transition, delay: 0.6 + 0.1 * options.length }
    }
  }
})

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
      transition: { ...transition, delay: 0.7 + 0.3 * index }
    }
  }
})

export {
  labelAnimationProps,
  sidebarAnimationProps,
  navbarItemsAnimationProps,
  sidebarItemsAnimationProps
}
