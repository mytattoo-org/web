import type { INavbarContext, IShowAuthModalState } from './types'

import { useState } from 'react'
import { createContext } from 'react'

const NavbarContext = createContext({
  showAuthModal: { page: 'sign-in', open: false }
} as INavbarContext)

const useNavbarLayout = () => {
  const [showAuthModal, setShowAuthModal] = useState<IShowAuthModalState>({
    open: false,
    page: 'sign-in'
  })

  const toggleAuthModal = (newState: IShowAuthModalState) => {
    setShowAuthModal(newState)
  }

  const context: INavbarContext = { showAuthModal, toggleAuthModal }

  return { context }
}

export { useNavbarLayout, NavbarContext }
