import { TVerifyAuthentication } from './types'

import { api } from 'api'

const verifyAuthentication: TVerifyAuthentication = async (_, { getState }) => {
  try {
    const { userStore } = getState()

    if (userStore.user) return userStore.user

    const token = localStorage.getItem('@MyTattoo-token')

    if (token) {
      const { data } = await api.get('/user', {
        headers: { Authorization: `Bearer ${token}` }
      })

      return data.user
    }

    return undefined
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.error
        ? error.response.data.error
        : 'Error inesperado tente novamente mais tarde'
    )
  }
}

export default verifyAuthentication
