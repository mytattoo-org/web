import { HTMLAttributes, ReactNode } from 'react'

interface ITooltipStyleProps {
  marginTop: number
}

interface ITooltipProps
  extends Partial<ITooltipStyleProps>,
    HTMLAttributes<HTMLDivElement> {
  ariaName?: string
  content: ReactNode
  trigger?: ReactNode
}

export type { ITooltipProps, ITooltipStyleProps }
