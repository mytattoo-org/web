import type { IFeedContext } from './types'

import useAppDispatch from 'hooks/useAppDispatch'

import { verifyAuthenticationThunk } from 'store/user/extraReducers/verifyAuthentication'

import { createContext, useEffect, useState } from 'react'

const FeedContext = createContext<IFeedContext>({
  showLeftSide: true
} as IFeedContext)

const useFeed = () => {
  const dispatch = useAppDispatch()
  const [showLeftSide, setShowLeftSide] = useState(true)

  const toggleShowLeftSide = () => {
    setShowLeftSide(prev => !prev)
  }

  useEffect(() => {
    dispatch(verifyAuthenticationThunk())
  }, [dispatch])

  const contextValue: IFeedContext = {
    showLeftSide,
    toggleShowLeftSide
  }

  return { showLeftSide, contextValue }
}

export { useFeed, FeedContext }
