import { HTMLAttributes } from 'react'

interface IFeedbackStyleProps {
  color?: string
}

interface IFeedbackProps
  extends IFeedbackStyleProps,
    HTMLAttributes<HTMLDivElement> {
  title?: string
  content?: string
}

export type { IFeedbackProps, IFeedbackStyleProps }
