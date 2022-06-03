import { HTMLAttributes, ReactNode } from 'react'

interface ITooltipStyleProps {}

interface ITooltipProps
  extends ITooltipStyleProps,
    HTMLAttributes<HTMLDivElement> {
  trigger: ReactNode
  content: ReactNode
  ariaName: string
}

export type { ITooltipProps, ITooltipStyleProps }
