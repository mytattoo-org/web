import type { INavbarContext, IShowAuthModalState } from './types'

import { useState } from 'react'
import { createContext } from 'react'

const NavbarContext = createContext({
  showAuthModal: { page: 'sign-in', open: false },
  showFilters: true
} as INavbarContext)

const useNavbarLayout = () => {
  const [showFilters, setShowFilters] = useState(true)
  const [showSuggestions, setShowSuggestions] = useState(true)
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

  const toggleShowSuggestions: INavbarContext['toggleShowSuggestions'] =
    newState => {
      newState
        ? setShowSuggestions(newState)
        : setShowSuggestions(prev => !prev)
    }

  const context: INavbarContext = {
    showFilters,
    showAuthModal,
    toggleAuthModal,
    showSuggestions,
    toggleShowFilters,
    toggleShowSuggestions
  }

  return { context }
}

export { useNavbarLayout, NavbarContext }
