import { ButtonHTMLAttributes } from 'react'

interface IHeartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  liked: boolean
}

export type { IHeartButtonProps }
