import { animations } from './animations'

import { IUser } from '@common/types/users/models/userModel.types'
import { TReadUsersResponse } from '@common/types/users/useCases/readUsers.types'

import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { api } from 'services/api'

const useSuggestions = (startOpen: boolean) => {
  const [show, setShow] = useState(startOpen)
  const [suggestions, setSuggestions] = useState<IUser[]>([])

  const onArrowClick = () => {
    setShow(prev => !prev)
  }

  const getSuggestions = async () => {
    const res: AxiosResponse<TReadUsersResponse> = await api.get('/users')
    setSuggestions(res.data.users || [])
  }

  useEffect(() => {
    getSuggestions()
  }, [])

  return {
    show,
    animations,
    onArrowClick,
    suggestions
  }
}

export { useSuggestions }
