import theme from 'styles/theme'

import { transition } from 'utils/framerMotion/defaults'

import { darken } from 'polished'

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
      transition: { ...transition, delay: 0.3 + 0.1 * options.length }
    }
  }
})

export { sidebarAnimationProps }
