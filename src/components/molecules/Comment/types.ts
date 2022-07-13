import { Variants } from 'framer-motion'
import { ComponentPropsWithRef } from 'react'

interface ICommentStyleProps {
  isArtist: boolean
}

interface ICommentProps extends ComponentPropsWithRef<'ul'> {
  name: string
  avatar: string
  content: string
  forwardedAs?: any
  isArtist?: boolean
  variants?: Variants
}

export type { ICommentProps, ICommentStyleProps }
