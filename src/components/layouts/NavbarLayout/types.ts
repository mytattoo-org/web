import { ReactNode } from 'react'

interface IShowAuthModalState {
  open: boolean
  page: 'sign-in' | 'sign-up'
}

interface INavbarContext {
  showFilters: boolean
  showSuggestions: boolean
  showAuthModal: IShowAuthModalState
  toggleShowFilters: (newState?: boolean) => void
  toggleShowSuggestions: (newState?: boolean) => void
  toggleAuthModal: (newState: IShowAuthModalState) => void
}

interface INavbarProps {
  children: ReactNode
}

export type { IShowAuthModalState, INavbarContext, INavbarProps }
