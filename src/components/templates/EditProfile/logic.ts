import type {
  IEditProfileForm,
  TOnNewPasswordChange,
  TUseEditProfile
} from './types'

import { IForwardModal } from 'components/molecules/Modal/types'

import useAppSelector from 'hooks/useAppSelector'

import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

const useEditProfile: TUseEditProfile = () => {
  const router = useRouter()
  const modalRef = useRef<IForwardModal>(null)
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
      modalRef.current?.triggerModal({ open: false })
    }
  })

  useEffect(() => {
    !user && router.push('/')
  }, [router, user])

  const onSaveClick = () => {
    modalRef.current?.triggerModal({ open: true })
  }

  const onNewPasswordBlur: TOnNewPasswordChange = event => {
    setShowConfirmPassword(!!event.target.value)
  }

  return {
    formik,
    modalRef,
    onSaveClick,
    onNewPasswordBlur,
    showConfirmPassword
  }
}

export { useEditProfile }
