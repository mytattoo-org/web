import type { ISignInRequest as ISignInValues } from '../../../../submodules/common/src/types/authentication/signIn.types'
import { signInYupSchema } from './schemas'

import { FeedContext } from 'components/templates/Feed/logic'

import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'

import { signInThunk } from 'store/user/extraReducers/signIn'

import { useFormik } from 'formik'
import { useContext, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

const initialValues: ISignInValues = {
  password: '',
  usernameOrEmail: ''
}

const useSignIn = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const user = useAppSelector(({ user }) => user)
  const [loading, setLoading] = useState(false)
  const { toggleShowAuthModal, triggeringFeedback } = useContext(FeedContext)

  const onSignInSubmit = async (dataToAuthenticate: ISignInValues) => {
    try {
      await dispatch(signInThunk(dataToAuthenticate)).unwrap()

      triggeringFeedback({
        title: 'Sucesso',
        content: `Bem vindo de volta, ${user.user?.username}.`,
        color: theme.colors.green
      })

      toggleShowAuthModal({ open: false, page: 'sign-in' })
    } catch (error: any) {
      triggeringFeedback({
        title: 'Error',
        color: theme.colors.green,
        content: error.message || 'Error inesperado tente novamente mais tarde.'
      })
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit: onSignInSubmit,
    validationSchema: signInYupSchema
  })

  const { password, usernameOrEmail } = formik.errors
  const enableSubmit = !password && !usernameOrEmail && formik.dirty

  const onSignUpClick = () => {
    toggleShowAuthModal({ page: 'sign-up', open: true })
  }

  const onCloseClick = () => {
    toggleShowAuthModal({ page: 'sign-in', open: false })
  }

  useEffect(() => {
    setLoading(user.loading)
  }, [user.loading])

  return { onCloseClick, onSignUpClick, formik, enableSubmit, loading }
}

export { useSignIn }
