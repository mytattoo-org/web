import type { INavbarContext, IShowAuthModalState } from './types'

import { IForwardFeedback } from 'components/molecules/Feedback/types'

import { useRef, useState } from 'react'
import { createContext } from 'react'

const NavbarContext = createContext({
  showAuthModal: { page: 'sign-in', open: false },
  showFilters: true
} as INavbarContext)

const useNavbarLayout = () => {
  const feedbackRef = useRef<IForwardFeedback>(null)

  const [showFilters, setShowFilters] = useState(true)

  const [showAuthModal, setShowAuthModal] = useState<IShowAuthModalState>({
    open: false,
    page: 'sign-in'
  })

  const toggleAuthModal: INavbarContext['toggleAuthModal'] = newState => {
    setShowAuthModal(newState)
  }

  const toggleShowFilters: INavbarContext['toggleShowFilters'] = newState => {
    newState ? setShowFilters(newState) : setShowFilters(prev => !prev)
  }

  const context: INavbarContext = {
    showFilters,
    showAuthModal,
    toggleAuthModal,
    toggleShowFilters,
    triggerFeedback: feedbackRef.current?.triggerFeedback
  }

  return { context, feedbackRef }
}

export { useNavbarLayout, NavbarContext }
