import { useFormik } from 'formik'

const useComments = () => {
  const formik = useFormik({
    initialValues: { newComment: '' },
    onSubmit: values => {}
  })

  return { formik }
}

export { useComments }
