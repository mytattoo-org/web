import type { TSignIn } from './types'

import { TSignInResponse } from '@common/types/authentication/useCases/signIn.types'
import { TReadUsersResponse } from '@common/types/users/useCases/readUsers.types'

import { api } from 'api'
import { AxiosResponse } from 'axios'
import { add } from 'date-fns'

const signIn: TSignIn = async data => {
  try {
    const response: AxiosResponse<TSignInResponse> = await api.post(
      `/auth/sign-in`,
      data
    )

    const { id, token } = response.data

    if (id && token) {
      const response: AxiosResponse<TReadUsersResponse> = await api.get(
        `/users/${id}`
      )

      const user = response.data.user

      localStorage.setItem('@MyTattoo-token', token)

      if (user) return { user: { token, ...user }, loading: false }
    }
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.error
        ? error.response.data.error
        : 'Error inesperado tente novamente mais tarde'
    )
  }

  return { loading: false, user: undefined }
}

export default signIn
