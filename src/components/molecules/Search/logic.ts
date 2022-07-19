import type { IValues } from './types'

import { FormikConfig, useFormik } from 'formik'

const initialValues: IValues = { search: '' }

const useSearch = () => {
  const onSearchFormSubmit: FormikConfig<IValues>['onSubmit'] = values => {
    console.log(values)
  }

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: onSearchFormSubmit
  })

  return { formik }
}

export { useSearch }
