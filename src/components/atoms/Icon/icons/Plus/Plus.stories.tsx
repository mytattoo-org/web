import Plus from './index'

import theme from 'styles/theme'

import { joinClassNames } from 'utils/joinClassNames'

import { ComponentMeta, ComponentStory } from '@storybook/react'

const metadata: ComponentMeta<typeof Plus> = {
  component: Plus,
  title: 'Components/Atoms/Icons/Plus',
  parameters: {
    docs: {
      description: {
        component: `Plus is only one example of others icons, they can be styled using classNames: ${joinClassNames(
          ['Icon', 'Plus']
        )}`
      }
    }
  },
  argTypes: {
    title: {
      type: 'string',
      defaultValue: 'Add new style',
      description: 'Title for screen reader'
    },
    desc: {
      type: 'string',
      defaultValue: 'When adding new style in filters you can find them',
      description: 'Description for screen reader'
    },
    labelledBy: {
      type: 'string',
      defaultValue: 'addStyle',
      description: 'Id to found title and description'
    }
  }
}

const Template: ComponentStory<typeof Plus> = args => (
  <Plus style={{ height: 24, fill: theme.colors.red }} {...args} />
)

const Primary = Template.bind({})

Primary.args = {} as ComponentStory<typeof Plus>['args']

export { Primary }

export default metadata
