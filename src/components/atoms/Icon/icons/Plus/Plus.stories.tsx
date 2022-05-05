import Plus from './index'

import { ComponentMeta, ComponentStory } from '@storybook/react'

const metadata: ComponentMeta<typeof Plus> = {
  component: Plus,
  title: 'Components/Atoms/Icons/Plus'
}

const Template: ComponentStory<typeof Plus> = args => <Plus {...args} />

const Primary = Template.bind({})

Primary.args = {} as ComponentStory<typeof Plus>['args']

export { Primary }

export default metadata
