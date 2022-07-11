import useAppSelector from 'hooks/useAppSelector'

import { TCreatePostResponse } from '@common/types/posts/useCases/createPost.types'

import { api } from 'api'
import { AxiosResponse } from 'axios'
import { useFormik } from 'formik'

const useCreatePost = () => {
  const { user } = useAppSelector(({ userStore }) => userStore)

  const formik = useFormik({
    onSubmit: async formData => {
      const response: AxiosResponse<TCreatePostResponse> = await api.post(
        '/posts',
        formData,
        { headers: { Authorization: `Bearer ${user?.token}` } }
      )
    },
    initialValues: { image: '', description: '' }
  })

  return { formik }
}

export { useCreatePost }
