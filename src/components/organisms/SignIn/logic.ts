import type {
  ISignInRequest as ISignInValues,
  TSignInResponse
} from '../../../../submodules/common/src/types/authentication/signIn.types'
import type { TReadUsersResponse } from '../../../../submodules/common/src/types/users/readUsers.types'
import { signInYupSchema } from './schemas'

import { FeedContext } from 'components/templates/Feed/logic'

import useAppDispatch from 'hooks/useAppDispatch'

import user from 'store/user'

import { api } from 'api'
import { AxiosResponse } from 'axios'
import { add } from 'date-fns'
import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useTheme } from 'styled-components'

const initialValues: ISignInValues = {
  password: '',
  usernameOrEmail: ''
}

const useSignIn = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)
  const { toggleShowAuthModal, triggeringFeedback } = useContext(FeedContext)

  const onSignInSubmit = async (dataToAuthenticate: ISignInValues) => {
    try {
      setLoading(true)

      const signInResponse: AxiosResponse<TSignInResponse> = await api.post(
        '/auth/sign-in',
        dataToAuthenticate
      )

      const { token, id } = signInResponse.data

      const readUsersResponse: AxiosResponse<TReadUsersResponse> =
        await api.get(`/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        })

      const { user: userData } = readUsersResponse.data

      const expiresTokenDate = add(new Date(), { days: 1 }).toUTCString()

      document.cookie = `token=${token}; expiresIn=${expiresTokenDate}`

      dispatch(user.actions.setUser(userData))

      triggeringFeedback({
        title: 'Sucesso',
        color: theme.colors.green,
        content: `Bem-vindo de volta, ${userData?.username}!`
      })

      toggleShowAuthModal({ page: 'sign-in', open: false })
    } catch (error) {
      triggeringFeedback({
        title: 'Error',
        color: theme.colors.red,
        content: 'Error ao conectar, tente novamente mais tarde.'
      })
    } finally {
      setLoading(false)
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

  return { onCloseClick, onSignUpClick, formik, enableSubmit, loading }
}

export { useSignIn }
