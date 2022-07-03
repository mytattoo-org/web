import type {
  IEditProfileForm,
  TOnNewPasswordChange,
  TUseEditProfile
} from './types'

import { editProfileYupSchema } from './schemas'

import { IForwardFeedback } from 'components/molecules/Feedback/types'
import { IForwardModal } from 'components/molecules/Modal/types'

import useAppSelector from 'hooks/useAppSelector'

import { api } from 'api'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

const useEditProfile: TUseEditProfile = () => {
  const theme = useTheme()
  const router = useRouter()
  const modalRef = useRef<IForwardModal>(null)
  const [loading, setLoading] = useState(false)
  const feedbackRef = useRef<IForwardFeedback>(null)

  const { user } = useAppSelector(({ userStore }) => userStore)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const triggerFeedback = feedbackRef.current?.triggerFeedback

  const formik = useFormik<IEditProfileForm>({
    initialValues: {
      bio: user?.bio,
      email: user?.email,
      avatar: user?.avatar,
      username: user?.username,
      short_bio: user?.short_bio
    },
    validationSchema: editProfileYupSchema,
    onSubmit: async values => {
      console.log(values.avatar)

      try {
        setLoading(true)

        await api.patch(
          `/users`,
          {
            password: values.password,
            newPassword: values.newPassword,
            bio: user?.bio !== values.bio ? values.bio : undefined,
            email: user?.email !== values.email ? values.email : undefined,
            avatar: user?.avatar !== values.avatar ? values.avatar : undefined,
            username:
              user?.username !== values.username ? values.username : undefined,
            short_bio:
              user?.short_bio !== values.short_bio
                ? values.short_bio
                : undefined
          },
          { headers: { Authorization: `Bearer ${user?.token}` } }
        )

        setLoading(false)
        modalRef.current?.triggerModal({ open: false })
        ;('')
        triggerFeedback &&
          triggerFeedback({
            title: 'Sucesso',
            color: theme.colors.green,
            content: 'Informações atualizadas'
          })
      } catch (error) {
        triggerFeedback &&
          triggerFeedback({
            title: 'Error',
            color: theme.colors.red,
            content: 'Algo deu errado tente novamente'
          })
      } finally {
        setLoading(false)
      }
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
    loading,
    modalRef,
    onSaveClick,
    feedbackRef,
    onNewPasswordBlur,
    showConfirmPassword
  }
}

export { useEditProfile }
