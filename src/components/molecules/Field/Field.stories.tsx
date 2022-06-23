import Field from './index'

import { addBreakLine } from 'utils/addBreakLine'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useFormik } from 'formik'

const classNames = addBreakLine([
  '.Field.${className}',
  '.Field.${className}.Input',
  '.Field.${className}.Tooltip'
])

const metadata: ComponentMeta<typeof Field> = {
  component: Field,
  title: 'Components/Molecules/Field',
  parameters: {
    docs: {
      description: {
        component: `This is a styled <b>Input</b> with <b>Tooltip</b>, can be styled by classNames: ${classNames}`
      }
    }
  },
  argTypes: {
    name: {
      description: 'Name of input tag'
    },
    label: {
      description: 'Label for input shown above'
    },
    ariaName: {
      description: 'Aria name for Tooltip component'
    },
    formik: {
      control: false,
      description: 'Formik object returned by useFormik hook'
    }
  }
}

const Template: ComponentStory<typeof Field> = args => {
  const formik = useFormik({
    initialValues: { username: '' },
    onSubmit: () => {}
  })

  return <Field {...args} formik={formik} />
}

const Default = Template.bind({})

Default.args = {
  name: 'username',
  label: 'Username',
  ariaName: 'username'
} as ComponentStory<typeof Field>['args']

export { Default }
export default metadata
