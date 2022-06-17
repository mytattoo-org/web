import Tooltip from './index'

import { ComponentMeta, ComponentStory } from '@storybook/react'

const metadata: ComponentMeta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Components/Molecules/Tooltip',
  parameters: {
    docs: {
      description: {
        component:
          'Tooltip styled by classNames:.Tooltip, .Content, .Trigger and .TooltipArrow'
      }
    }
  },
  argTypes: {
    onMouseOver: { action: true },
    trigger: {
      description:
        'Any component to be used as a trigger to display the content'
    },
    content: {
      type: 'string',
      description:
        'Any component to be the content of balloon displayed by hovering the trigger'
    },
    ariaName: {
      description:
        'Value to be used as aria-label on button that is wrapping trigger: `${ariaName} tooltip trigger`'
    }
  }
}

const Template: ComponentStory<typeof Tooltip> = args => (
  <Tooltip {...args}>{args.children}</Tooltip>
)

const Primary = Template.bind({})

Primary.args = {
  ariaName: 'Default',
  content: 'Any tooltip content here'
} as ComponentStory<typeof Tooltip>['args']

export { Primary }
export default metadata
