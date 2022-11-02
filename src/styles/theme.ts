import { pxToRem } from 'utils/pxAndRem'

const theme = {
  colors: {
    red: '#ff5959',
    green: '#34A853',
    primary: '#9C7BEB',
    secondary: '#fcfcfc',
    background: '#090909'
  },
  fonts: {
    sizes: {
      1: pxToRem(12),
      2: pxToRem(14),
      3: pxToRem(16),
      4: pxToRem(18),
      5: pxToRem(20),
      6: pxToRem(22),
      7: pxToRem(24),
      8: pxToRem(26),
      9: pxToRem(28),
      10: pxToRem(30)
    }
  }
}

export default theme
