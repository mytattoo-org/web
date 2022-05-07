import Tooltip from './index'

import Alert from 'components/atoms/Icon/icons/Alert'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

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
    trigger: {
      description:
        'Any component to be used as a trigger to display the content'
    },
    content: {
      description: 'Any component to be the content displayed by the trigger'
    },
    ariaName: {
      description:
        'Value to be used as aria-label on button that is wrapping trigger: `${ariaName} tooltip trigger`'
    }
  }
}

const Template: ComponentStory<typeof Tooltip> = args => (
  <Style>
    <Tooltip {...args}>{args.children}</Tooltip>
  </Style>
)

const Primary = Template.bind({})

Primary.args = {
  trigger: <Alert />,
  ariaName: 'A simple tooltip',
  content: <div>Any tooltip content here</div>
} as ComponentStory<typeof Tooltip>['args']

export { Primary }

export default metadata

const Style = styled.div`
  padding-top: 48px;

  .Trigger .Alert {
    height: 24px;

    path {
      fill: ${({ theme }) => theme.colors.red};
    }
  }

  .Content {
    left: 0px;
    padding: 8px;
    bottom: 36px;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.colors.red};

    .Alert {
      height: 18px;

      path {
        fill: ${({ theme }) => theme.colors.secondary};
      }
    }

    .TooltipArrow {
      position: absolute;
      left: 9px;
      bottom: -5px;

      height: 8px;

      path {
        fill: ${({ theme }) => theme.colors.red};
      }
    }
  }
`
