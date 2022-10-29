import useAppDispatch from 'hooks/useAppDispatch'

import { readFeedThunk } from 'store/posts/extraReducers/readFeed'
import { verifyAuthenticationThunk } from 'store/user/extraReducers/verifyAuthentication'

import { NavbarContext } from 'components/layouts/NavbarLayout/logic'
import { useCallback, useContext, useEffect } from 'react'

const useFeed = () => {
  const dispatch = useAppDispatch()
  const { showFilters, showSuggestions } = useContext(NavbarContext)

  const readUserAndFeed = useCallback(async () => {
    await dispatch(verifyAuthenticationThunk())

    dispatch(readFeedThunk())
  }, [dispatch])

  useEffect(() => {
    readUserAndFeed()
  }, [readUserAndFeed])

  return { showFilters, showSuggestions }
}

export { useFeed }
