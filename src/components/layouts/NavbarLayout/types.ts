import { TTriggerFeedback } from 'components/molecules/Feedback/types'

import { ReactNode } from 'react'

interface IShowAuthModalState {
  open: boolean
  page: 'sign-in' | 'sign-up'
}

interface INavbarContext {
  showFilters?: boolean
  triggerFeedback?: TTriggerFeedback
  showAuthModal: IShowAuthModalState
  toggleAuthModal: (newState: IShowAuthModalState) => void
  toggleShowFilters: (newState?: boolean) => void
}

interface INavbarProps {
  children: ReactNode
}

export type { IShowAuthModalState, INavbarContext, INavbarProps }
