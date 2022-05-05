import { IPostHeaderProps } from 'components/molecules/PostHeader/types'

import { HTMLAttributes } from 'react'

interface IPostProps extends HTMLAttributes<HTMLDivElement> {
  postHeader: IPostHeaderProps
  forwardedAs?: any
}

export type { IPostProps }
