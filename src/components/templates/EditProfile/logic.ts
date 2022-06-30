import type {
  IEditProfileForm,
  TOnAvatarChange,
  TUseEditProfile
} from './types'

import useAppSelector from 'hooks/useAppSelector'

import { toBase64 } from 'utils/toBase64'

import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useEditProfile: TUseEditProfile = () => {
  const router = useRouter()
  const { user } = useAppSelector(({ userStore }) => userStore)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const formik = useFormik<IEditProfileForm>({
    initialValues: {
      bio: user?.bio,
      email: user?.email,
      avatar: user?.avatar,
      username: user?.username,
      short_bio: user?.short_bio
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  const onAvatarChange: TOnAvatarChange = async event => {
    const file = event?.currentTarget?.files

    if (file !== null) {
      const base64Avatar = await toBase64(file[0])
      formik.setFieldValue('avatar', base64Avatar)
    }
  }

  useEffect(() => {
    !user && router.push('/')
  }, [router, user])

  return { formik, onAvatarChange, showConfirmPassword, setShowConfirmPassword }
}

export { useEditProfile }
