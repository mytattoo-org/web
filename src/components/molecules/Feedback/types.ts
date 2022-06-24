import { HTMLAttributes } from 'react'

interface IFeedbackStyleProps {
  color?: string
}

interface ITriggerParams
  extends IFeedbackStyleProps,
    HTMLAttributes<HTMLDivElement> {
  title?: string
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
  IFeedbackStyleProps,
  IFeedbackState,
  IForwardFeedback,
  TTriggerFeedback
}
