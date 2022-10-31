import { HTMLAttributes } from 'react'

interface IUserCardStyleProps {
  smallBio?: string
}

interface IUserCardProps
  extends IUserCardStyleProps,
    HTMLAttributes<HTMLButtonElement> {
  name: string
  avatar: string
  smallBio?: string
}

export type { IUserCardProps, IUserCardStyleProps }
