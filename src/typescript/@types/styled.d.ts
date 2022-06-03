import theme from '../../styles/theme'

import 'styled-components'

type TTheme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme extends TTheme {}
}
