import type { INavbarContext, IShowAuthModalState } from './types'

import { IForwardFeedback } from 'components/molecules/Feedback/types'

import { useRef, useState } from 'react'
import { createContext } from 'react'

const NavbarContext = createContext({
  showAuthModal: { page: 'sign-in', open: false },
  triggerFeedback: undefined
} as INavbarContext)

const useNavbarLayout = () => {
  const feedbackRef = useRef<IForwardFeedback>(null)
  const [showAuthModal, setShowAuthModal] = useState<IShowAuthModalState>({
    open: false,
    page: 'sign-in'
  })

  const toggleAuthModal = (newState: IShowAuthModalState) => {
    setShowAuthModal(newState)
  }

  const context: INavbarContext = {
    showAuthModal,
    toggleAuthModal,
    triggerFeedback: feedbackRef.current?.triggerFeedback
  }

  return { context, feedbackRef }
}

export { useNavbarLayout, NavbarContext }
