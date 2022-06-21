import { HTMLAttributes, ReactNode } from 'react'

interface ITooltipStyleProps {
  marginTop: number
}

interface ITooltipProps
  extends Partial<ITooltipStyleProps>,
    HTMLAttributes<HTMLDivElement> {
  ariaName?: string
  content: ReactNode
  trigger?: ReactNode | string
}

export type { ITooltipProps, ITooltipStyleProps }
