import GlobalProvider from 'components/providers/GlobalProvider'

import { themes } from '@storybook/theming'
import React from 'react'

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
  darkMode: {
    dark: { ...themes.dark, appBg: '#181818' },
    light: { ...themes.normal }
  }
}

const decorators = [content => <GlobalProvider>{content()}</GlobalProvider>]

export { parameters, decorators }
