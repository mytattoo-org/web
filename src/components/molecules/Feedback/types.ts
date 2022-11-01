interface IFeedbackStyleProps {
  color?: string
}

interface ITriggerParams {
  title?: string
  color?: string
  content?: string
}

interface IFeedbackState extends ITriggerParams {
  open: boolean
}

type TTriggerFeedback = (props: ITriggerParams) => void

interface IForwardFeedback {
  triggerFeedback: TTriggerFeedback
}

export type {
  ITriggerParams,
  IFeedbackState,
  IForwardFeedback,
  TTriggerFeedback,
  IFeedbackStyleProps
}
