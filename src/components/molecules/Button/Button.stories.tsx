import Button from './index'

import Plus from 'components/atoms/Icon/icons/Plus'

import { ComponentMeta, ComponentStory } from '@storybook/react'

const metadata: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Components/Molecules/Button',
  argTypes: {
    icon: {
      control: false,
      description:
        'Any icon passed by props example <Plus /> (inside Atoms/Icons/Plus)'
    }
  }
}

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>{args.children}</Button>
)

const WithIcon = Template.bind({})
const WithoutIcon = Template.bind({})

WithIcon.args = {
  variant: 'primary',
  children: 'Button',
  disabled: false,
  icon: <Plus />
} as ComponentStory<typeof Button>['args']

WithoutIcon.args = {
  variant: 'primary',
  children: 'Button',
  disabled: false
} as ComponentStory<typeof Button>['args']

export { WithIcon, WithoutIcon }

export default metadata
