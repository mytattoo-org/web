import { GlobalContext } from '../MyApp'
import { signInYupSchema } from './schemas'

import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'

import { signInThunk } from 'store/user/extraReducers/signIn'

import type { ISignInRequest as ISignInValues } from '@common/types/authentication/useCases/signIn.types'

import { NavbarContext } from 'components/layouts/NavbarLayout/logic'
import { useFormik } from 'formik'
import { useContext, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

const initialValues: ISignInValues = { password: '', usernameOrEmail: '' }

const useSignIn = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const userStore = useAppSelector(({ userStore }) => userStore)
  const { toggleAuthModal } = useContext(NavbarContext)
  const { feedback } = useContext(GlobalContext)

  const onSignInSubmit = async (dataToAuthenticate: ISignInValues) => {
    try {
      const { user } = await dispatch(signInThunk(dataToAuthenticate)).unwrap()

      feedback?.trigger &&
        feedback.trigger({
          title: 'Sucesso',
          content: `Bem vindo de volta, ${user?.username}.`,
          color: theme.colors.green
        })

      toggleAuthModal({ open: false, page: 'sign-in' })
    } catch (error: any) {
      feedback.trigger &&
        feedback.trigger({
          title: 'Error',
          color: theme.colors.red,
          content:
            error.message || 'Error inesperado tente novamente mais tarde.'
        })
    }
  }

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: onSignInSubmit,
    validationSchema: signInYupSchema
  })

  const { password, usernameOrEmail } = formik.errors
  const enableSubmit =
    !password && !usernameOrEmail && formik.dirty ? true : false

  const onSignUpClick = () => {
    toggleAuthModal({ page: 'sign-up', open: true })
  }

  const onCloseClick = () => {
    toggleAuthModal({ page: 'sign-in', open: false })
  }

  useEffect(() => {
    setLoading(userStore.loading || false)
  }, [userStore.loading])

  return { formik, loading, onCloseClick, enableSubmit, onSignUpClick }
}

export { useSignIn }
