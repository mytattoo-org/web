import Button from './index'

import Plus from 'components/atoms/Icon/icons/Plus'

import { ComponentMeta, ComponentStory } from '@storybook/react'

const metadata: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Components/Molecules/Button',
  argTypes: {
    icon: { control: false, description: 'Any icon passed by props' }
  }
}

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>{args.children}</Button>
)

const WithIcon = Template.bind({})
const WithoutIcon = Template.bind({})

WithIcon.args = {
  icon: <Plus />,
  disabled: false,
  children: 'Button'
} as ComponentStory<typeof Button>['args']

WithoutIcon.args = {
  children: 'Button',
  disabled: false
} as ComponentStory<typeof Button>['args']

export { WithIcon, WithoutIcon }

export default metadata
