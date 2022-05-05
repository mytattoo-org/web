import { IFeedbackProps } from 'components/molecules/Feedback/types'

interface IShowAuthModalState {
  open: boolean
  page: 'sign-in' | 'sign-up'
}

interface IFeedbackState {
  open: boolean
  props?: IFeedbackProps
}

interface IFeedContext {
  showLeftSide: boolean
  toggleShowLeftSide: () => void
  showAuthModal: IShowAuthModalState
  toggleShowAuthModal: (newState: IShowAuthModalState) => void
  triggeringFeedback: (feedBackProps: IFeedbackState['props']) => void
}

export type { IFeedContext, IShowAuthModalState, IFeedbackState }
