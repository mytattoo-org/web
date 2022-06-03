import type { IGlobalProviderProps } from './types'

import { store } from 'store/'

import GlobalStyle from 'styles'
import theme from 'styles/theme'

import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const GlobalProvider = ({ children }: IGlobalProviderProps) => (
  <ThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      <>
        <GlobalStyle />

        {children}
      </>
    </ReduxProvider>
  </ThemeProvider>
)

export default GlobalProvider
