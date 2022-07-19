import { useFormik } from 'formik'

const useComments = () => {
  const formik = useFormik({
    validateOnBlur: true,
    validateOnChange: false,
    initialValues: { newComment: '' },
    onSubmit: values => {
      console.log(values)
    }
  })

  return { formik }
}

export { useComments }
