import type {
  IEditProfileForm,
  TOnNewPasswordChange,
  TUseEditProfile
} from './types'

import { editProfileYupSchema } from './schemas'

import { IForwardFeedback } from 'components/molecules/Feedback/types'
import { IForwardModal } from 'components/molecules/Modal/types'

import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'

import { userStore } from 'store/user'
import { verifyAuthenticationThunk } from 'store/user/extraReducers/verifyAuthentication'

import { TUpdateUserResponse } from '@common/types/users/useCases/updateUser.types'

import { api } from 'api'
import { AxiosResponse } from 'axios'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

const setUndefinedIfIsEqual = <MainType, ComparedType>(
  main: MainType,
  toBeCompared: ComparedType
) => {
  const keys = Object.keys(main)
  const formValues = Object.values(main)

  for (let i = 0; i < keys.length; i++) {
    if (toBeCompared) {
      main[keys[i] as keyof MainType] =
        formValues[i] === toBeCompared[keys[i] as keyof ComparedType]
          ? undefined
          : formValues[i]
    }
  }

  return main
}

const useEditProfile: TUseEditProfile = () => {
  const theme = useTheme()
  const router = useRouter()
  const dispatch = useAppDispatch()
  const modalRef = useRef<IForwardModal>(null)
  const [loading, setLoading] = useState(false)
  const feedbackRef = useRef<IForwardFeedback>(null)
  const { user, loading: userLoading } = useAppSelector(
    ({ userStore }) => userStore
  )
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const triggerFeedback = feedbackRef.current?.triggerFeedback
  const triggerModal = modalRef.current?.triggerModal

  const initialValues = {
    artist: false,
    bio: user?.bio || undefined,
    email: user?.email || undefined,
    avatar: user?.avatar || undefined,
    username: user?.username || undefined,
    short_bio: user?.short_bio || undefined
  }

  const onSubmit = async (values: IEditProfileForm) => {
    try {
      setLoading(true)

      values.newPassword =
        values.newPassword === '' ? undefined : values.newPassword

      values.confirmNewPassword = undefined

      values = setUndefinedIfIsEqual(values, user)

      const response: AxiosResponse<TUpdateUserResponse> = await api.patch(
        `/users`,
        { ...values },
        { headers: { Authorization: `Bearer ${user?.token}` } }
      )

      dispatch(userStore.actions.update(response.data.updatedUser))

      setLoading(false)

      modalRef.current?.triggerModal({ open: false })

      triggerFeedback &&
        triggerFeedback({
          title: 'Sucesso',
          color: theme.colors.green,
          content: 'Informações atualizadas'
        })
    } catch (error) {
      if (triggerFeedback) {
        triggerFeedback({
          title: 'Error',
          color: theme.colors.red,
          content: 'Algo deu errado tente novamente'
        })
      }
    } finally {
      setLoading(false)
    }
  }

  const formik = useFormik<IEditProfileForm>({
    onSubmit,
    initialValues,
    validationSchema: editProfileYupSchema
  })

  const onSaveClick = () => {
    triggerModal && triggerModal({ open: true })
  }

  const onNewPasswordBlur: TOnNewPasswordChange = event => {
    setShowConfirmPassword(!!event.target.value)
  }

  useEffect(() => {
    dispatch(verifyAuthenticationThunk())
  }, [dispatch])

  useEffect(() => {
    if (userLoading === false && !user) router.push('/')
  }, [router, user, userLoading])

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
