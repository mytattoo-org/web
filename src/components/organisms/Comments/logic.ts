import { PostContext } from '../Post/logic'

import { useFormik } from 'formik'
import { useContext } from 'react'

const useComments = () => {
  const { addComment } = useContext(PostContext)

  const formik = useFormik({
    validateOnBlur: true,
    validateOnChange: false,
    initialValues: { newComment: '' },
    onSubmit: async ({ newComment }, { resetForm }) => {
      await addComment(newComment)

      resetForm()
    }
  })

  return { formik }
}

export { useComments }
