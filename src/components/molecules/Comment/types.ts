import { HTMLAttributes } from 'react'

interface ICommentStyleProps {
  isArtist: boolean
}

interface ICommentProps
  extends ICommentStyleProps,
    HTMLAttributes<HTMLDivElement> {
  name: string
  avatar: string
  content: string
  forwardedAs?: any
}

export type { ICommentProps, ICommentStyleProps }
