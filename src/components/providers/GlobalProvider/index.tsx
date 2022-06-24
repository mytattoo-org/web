import type { IGlobalProviderProps } from './types'

import { store } from 'store'

import GlobalStyle from 'styles'
import theme from 'styles/theme'

import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const GlobalProvider = ({ children }: IGlobalProviderProps) => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        {children}
      </>
    </ThemeProvider>
  </ReduxProvider>
)

export default GlobalProvider
