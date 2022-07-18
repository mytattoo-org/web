import GlobalProvider from '../src/components/providers/GlobalProvider'

import { Parameters, Story } from '@storybook/react'
import { themes } from '@storybook/theming'
import React from 'react'

const parameters: Parameters = {
  layout: 'centered',
  light: { ...themes.normal },
  actions: { argTypesRegex: '^on[A-Z].*' },
  dark: { ...themes.dark, appBg: '#181818' },
  controls: { matchers: { date: /Date$/, color: /(background|color)$/i } }
}

const decorators = [
  (Story: Story) => (
    <GlobalProvider>
      <Story />
    </GlobalProvider>
  )
]

export { parameters, decorators }
