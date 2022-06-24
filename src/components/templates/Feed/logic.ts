import type { IFeedContext, IFeedbackState } from './types'

import useAppDispatch from 'hooks/useAppDispatch'

import { verifyAuthenticationThunk } from 'store/user/extraReducers/verifyAuthentication'

import { createContext, useEffect, useState } from 'react'

const FeedContext = createContext<IFeedContext>({
  showLeftSide: true
} as IFeedContext)

const useFeed = () => {
  const dispatch = useAppDispatch()
  const [showLeftSide, setShowLeftSide] = useState(true)
  const [feedback, setFeedback] = useState<IFeedbackState>({
    open: false
  })

  const toggleShowLeftSide = () => {
    setShowLeftSide(prev => !prev)
  }

  const triggeringFeedback = (props: IFeedbackState['props']) => {
    setFeedback({ open: true, props })

    setTimeout(() => {
      setFeedback({ open: false })
    }, 1000)
  }

  useEffect(() => {
    dispatch(verifyAuthenticationThunk())
  }, [dispatch])

  const contextValue: IFeedContext = {
    showLeftSide,
    toggleShowLeftSide,
    triggeringFeedback
  }

  return { showLeftSide, contextValue, feedback }
}

export { useFeed, FeedContext }
