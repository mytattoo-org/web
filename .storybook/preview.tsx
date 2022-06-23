import GlobalProvider from '../src/components/providers/GlobalProvider'

import { Parameters, Story } from '@storybook/react'
import { themes } from '@storybook/theming'
import React from 'react'

const parameters: Parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
  darkMode: {
    dark: { ...themes.dark, appBg: '#181818' },
    light: { ...themes.normal }
  }
}

const decorators = [
  (Story: Story) => (
    <GlobalProvider>
      <Story />
    </GlobalProvider>
  )
]

export { parameters, decorators }
