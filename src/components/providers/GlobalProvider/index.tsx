import type { IGlobalProviderProps } from './types'

import store from 'store'

import GlobalStyle from 'styles'
import theme from 'styles/theme'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const GlobalProvider = ({ children }: IGlobalProviderProps) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <>
        <GlobalStyle />

        {children}
      </>
    </Provider>
  </ThemeProvider>
)

export default GlobalProvider
