import type { IFeedContext, IFeedbackState, IShowAuthModalState } from './types'

import { createContext, useState } from 'react'

const FeedContext = createContext<IFeedContext>({
  showLeftSide: true,
  showAuthModal: { page: 'sign-in', open: false }
} as IFeedContext)

const useFeed = () => {
  const [showLeftSide, setShowLeftSide] = useState(true)
  const [feedback, setFeedback] = useState<IFeedbackState>({
    open: false
  })
  const [showAuthModal, setShowAuthModal] = useState<IShowAuthModalState>({
    open: false,
    page: 'sign-in'
  })

  const toggleShowLeftSide = () => {
    setShowLeftSide(prev => !prev)
  }

  const toggleShowAuthModal = (newState: IShowAuthModalState) => {
    setShowAuthModal(newState)
  }

  const triggeringFeedback = (props: IFeedbackState['props']) => {
    setFeedback({ open: true, props })

    setTimeout(() => {
      setFeedback({ open: false })
    }, 1000)
  }

  const contextValue: IFeedContext = {
    showLeftSide,
    showAuthModal,
    toggleShowLeftSide,
    triggeringFeedback,
    toggleShowAuthModal
  }

  return { showLeftSide, contextValue, showAuthModal, feedback }
}

export { useFeed, FeedContext }
