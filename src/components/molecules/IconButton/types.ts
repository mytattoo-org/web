import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IIconButtonStyleProps {}

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  outlined: boolean
  ariaLabel?: string
  outlinedIcon: ReactNode
  outlinedAriaLabel?: string
}

export type { IIconButtonProps, IIconButtonStyleProps }
