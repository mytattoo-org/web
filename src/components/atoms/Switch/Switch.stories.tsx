import { Switch } from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useFormik } from 'formik'

const metadata: ComponentMeta<typeof Switch> = {
  component: Switch,
  title: 'Components/Atoms/Switch',
  parameters: {
    docs: {
      description: {
        component: `Switch component`
      }
    }
  },
  argTypes: {
    formik: {
      description: 'Formik value returned from useFormik'
    }
  }
}

const Template: ComponentStory<typeof Switch> = args => {
  const formik = useFormik({
    initialValues: { toggle: false },
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: values => {
      console.log(values)
    }
  })

  return <Switch {...args} formik={formik} />
}

const Default = Template.bind({})

Default.args = {} as ComponentStory<typeof Switch>['args']

export { Default }

export default metadata
