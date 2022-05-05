import { HTMLAttributes } from 'react'

interface IUserCardStyleProps {}

interface IUserCardProps
  extends IUserCardStyleProps,
    HTMLAttributes<HTMLButtonElement> {
  name: string
  avatar: string
  smallBio: string
}

export type { IUserCardProps, IUserCardStyleProps }
