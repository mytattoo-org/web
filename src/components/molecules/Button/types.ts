import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IButtonStyleProps {
  variant?: 'primary' | 'secondary'
}

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonStyleProps {
  icon?: ReactNode
}

export type { IButtonProps, IButtonStyleProps }
