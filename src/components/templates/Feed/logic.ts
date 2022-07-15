import useAppDispatch from 'hooks/useAppDispatch'

import { verifyAuthenticationThunk } from 'store/user/extraReducers/verifyAuthentication'

import { NavbarContext } from 'components/layouts/NavbarLayout/logic'
import { useContext, useEffect } from 'react'

const useFeed = () => {
  const dispatch = useAppDispatch()

  const { showFilters, showSuggestions } = useContext(NavbarContext)

  useEffect(() => {
    dispatch(verifyAuthenticationThunk())
  }, [dispatch])

  return { showFilters, showSuggestions }
}

export { useFeed }
