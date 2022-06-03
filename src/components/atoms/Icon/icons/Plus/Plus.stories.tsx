import Plus from './index'

import theme from 'styles/theme'

import { ComponentMeta, ComponentStory } from '@storybook/react'

const metadata: ComponentMeta<typeof Plus> = {
  component: Plus,
  title: 'Components/Atoms/Icons/Plus'
}

const Template: ComponentStory<typeof Plus> = args => (
  <Plus style={{ height: 24, fill: theme.colors.red }} {...args} />
)

const Primary = Template.bind({})

Primary.args = {} as ComponentStory<typeof Plus>['args']

export { Primary }

export default metadata
