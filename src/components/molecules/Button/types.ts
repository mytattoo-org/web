import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IButtonStyleProps {}

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonStyleProps {
  icon?: ReactNode
}

export type { IButtonProps, IButtonStyleProps }
