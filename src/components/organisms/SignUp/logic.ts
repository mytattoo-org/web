import type { ISignUpValues, TOnSignupSubmit } from './types'

import { signUpYupSchema } from './schema'

import { FeedContext } from 'components/templates/Feed/logic'

import { api } from 'api'
import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

const initialValues: ISignUpValues = {
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
}

const useSignUp = () => {
  const theme = useTheme()
  const [loading, setLoading] = useState(false)
  const { triggeringFeedback, toggleShowAuthModal } = useContext(FeedContext)

  const onSignUpSubmit: TOnSignupSubmit = async (
    dataToCreate: ISignUpValues
  ) => {
    setLoading(true)

    try {
      await api.post('/users', dataToCreate)

      triggeringFeedback({
        title: 'Sucesso',
        content: 'Cadastrado com sucesso.',
        color: theme.colors.green
      })

      toggleShowAuthModal({ page: 'sign-in', open: true })
    } catch (error) {
      triggeringFeedback({
        title: 'Error',
        color: theme.colors.red,
        content: 'Error ao se cadastrar, tente novamente mais tarde.'
      })
    } finally {
      setLoading(false)
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit: onSignUpSubmit,
    validationSchema: signUpYupSchema
  })

  const { email, confirmPassword, password, username } = formik.errors
  const enableSubmit =
    !confirmPassword && !email && !password && !username && formik.dirty

  const onArrowClick = () => {
    toggleShowAuthModal({ page: 'sign-in', open: true })
  }

  const onCloseClick = () => {
    toggleShowAuthModal({ page: 'sign-in', open: false })
  }

  return { formik, onArrowClick, onCloseClick, loading, enableSubmit }
}

export { useSignUp }
