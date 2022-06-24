import { IFeedbackProps } from 'components/molecules/Feedback/types'

interface IFeedbackState {
  open: boolean
  props?: IFeedbackProps
}

interface IFeedContext {
  showLeftSide: boolean
  toggleShowLeftSide: () => void
  triggeringFeedback: (feedBackProps: IFeedbackState['props']) => void
}

export type { IFeedContext, IFeedbackState }
