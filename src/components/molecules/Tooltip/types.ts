import { HTMLAttributes, ReactNode } from 'react'

interface ITooltipStyleProps {}

interface ITooltipProps
  extends ITooltipStyleProps,
    HTMLAttributes<HTMLDivElement> {
  trigger: ReactNode
  content: ReactNode
}

export type { ITooltipProps, ITooltipStyleProps }
