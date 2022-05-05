import { ComponentPropsWithoutRef } from 'react'

interface IAvatarStyleProps {}

interface IAvatarProps
  extends IAvatarStyleProps,
    ComponentPropsWithoutRef<'img'> {
  size: number
}

export type { IAvatarProps, IAvatarStyleProps }
