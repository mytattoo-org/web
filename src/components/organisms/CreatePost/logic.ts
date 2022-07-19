import useAppDispatch from 'hooks/useAppDispatch'

import { createPostThunk } from 'store/posts/extraReducers/createPost'

import { useFormik } from 'formik'

const useCreatePost = () => {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    validateOnBlur: true,
    validateOnChange: false,
    initialValues: { image: '', description: '' },
    onSubmit: async formData => {
      dispatch(createPostThunk(formData))
      formik.resetForm()
    }
  })

  return { formik }
}

export { useCreatePost }
