import type { ISignUpValues, TOnSignupSubmit } from './types'

import { signUpYupSchema } from './schemas'

import { NavbarContext } from 'components/layouts/NavbarLayout/logic'
import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { api } from 'services/api'
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
  const { toggleAuthModal } = useContext(NavbarContext)
  const { triggerFeedback } = useContext(NavbarContext)

  const onSignUpSubmit: TOnSignupSubmit = async (
    dataToCreate: ISignUpValues
  ) => {
    setLoading(true)

    try {
      await api.post('/users', dataToCreate)

      triggerFeedback &&
        triggerFeedback({
          title: 'Sucesso',
          color: theme.colors.green,
          content: 'Cadastrado com sucesso.'
        })

      toggleAuthModal({ page: 'sign-in', open: true })
    } catch (error) {
      triggerFeedback &&
        triggerFeedback({
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
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: onSignUpSubmit,
    validationSchema: signUpYupSchema
  })

  const { email, confirmPassword, password, username } = formik.errors
  const enableSubmit =
    !confirmPassword && !email && !password && !username && formik.dirty

  const onArrowClick = () => {
    toggleAuthModal({ page: 'sign-in', open: true })
  }

  const onCloseClick = () => {
    toggleAuthModal({ page: 'sign-in', open: false })
  }

  return { formik, onArrowClick, onCloseClick, loading, enableSubmit }
}

export { useSignUp }
