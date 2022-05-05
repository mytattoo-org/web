import { HTMLAttributes } from 'react'

interface ICreatePostStyleProps {}

interface ICreatePostProps
  extends ICreatePostStyleProps,
    HTMLAttributes<HTMLDivElement> {
  forwardedAs?: any
}

export type { ICreatePostProps, ICreatePostStyleProps }
