import Comment from './index'

import { addBreakLine } from 'utils/addBreakLine'

import avatar from '@public/temp/avatar.png'

import { ComponentMeta, ComponentStory } from '@storybook/react'

const classNames = addBreakLine(['.Comment.${className}'])

const metadata: ComponentMeta<typeof Comment> = {
  component: Comment,
  title: 'Components/Molecules/Comment',
  parameters: {
    docs: {
      description: {
        component: `Single commentary of users in  <b>Post > Comments</b> can be styled by classNames: ${classNames}`
      }
    }
  },
  argTypes: {
    avatar: { description: 'User avatar' },
    name: { description: 'User name' },
    content: { description: 'Comment text' }
  }
}

const Template: ComponentStory<typeof Comment> = args => <Comment {...args} />

const Default = Template.bind({})

Default.args = {
  avatar,
  name: 'Miguel Andrade',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime, eaque accusamus repellat nemo alias dignissimos fugiat aperiam doloremque vero repudiandae ipsum neque? Consectetur tenetur soluta inventore fuga voluptas consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime, eaque accusamus repellat nemo alias dignissimos fugiat aperiam doloremque vero repudiandae ipsum neque? Consectetur tenetur soluta inventore fuga voluptas consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime, eaque accusamus repellat nemo alias dignissimos fugiat aperiam doloremque vero repudiandae ipsum neque? Consectetur tenetur soluta inventore fuga voluptas consequatur?'
} as ComponentStory<typeof Comment>['args']

export { Default }
export default metadata
