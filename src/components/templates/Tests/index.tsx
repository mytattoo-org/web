import { TestsStyle } from './styles'
import type { ITestsProps } from './types'

import Field from 'components/molecules/Field'

import { useFormik } from 'formik'

const Tests = (props: ITestsProps) => {
  const formik = useFormik({
    initialValues: { username: '' },
    onSubmit: () => {}
  })

  return (
    <TestsStyle {...props}>
      <Field formik={formik} name='username' label='Username' />
    </TestsStyle>
  )
}

export default Tests
