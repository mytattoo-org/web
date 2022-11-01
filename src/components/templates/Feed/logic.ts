import { GlobalContext } from '../MyApp'

import useAppDispatch from 'hooks/useAppDispatch'

import { readFeedThunk } from 'store/posts/extraReducers/readFeed'
import { IPostStore } from 'store/posts/types'
import { verifyAuthenticationThunk } from 'store/user/extraReducers/verifyAuthentication'
import { IUserStore } from 'store/user/types'

import theme from 'styles/theme'

import { NavbarContext } from 'components/layouts/NavbarLayout/logic'
import { useCallback, useContext, useEffect } from 'react'

const useFeed = () => {
  const dispatch = useAppDispatch()
  const { feedback } = useContext(GlobalContext)
  const { showFilters, showSuggestions } = useContext(NavbarContext)

  const readUserAndFeed = useCallback(async () => {
    if (feedback.trigger) {
      try {
        await dispatch(verifyAuthenticationThunk())

        await dispatch(readFeedThunk())
      } catch (error) {
        feedback.trigger({
          title: 'Error',
          color: theme.colors.red,
          content: 'Falha ao conectar com o servidor'
        })
      }
    }
  }, [dispatch, feedback])

  useEffect(() => {
    readUserAndFeed()
  }, [readUserAndFeed])

  return { showFilters, showSuggestions }
}

export { useFeed }
