import { ReactNode } from 'react'

interface IShowAuthModalState {
  open: boolean
  page: 'sign-in' | 'sign-up'
}

interface INavbarContext {
  showAuthModal: IShowAuthModalState
  toggleAuthModal: (newState: IShowAuthModalState) => void
}

interface INavbarProps {
  children: ReactNode
}

export type { IShowAuthModalState, INavbarContext, INavbarProps }
