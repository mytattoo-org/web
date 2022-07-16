import type { IFeed } from '@common/types/posts/models/feedModel.types'

import { HTMLAttributes } from 'react'

interface IPostProps extends HTMLAttributes<HTMLDivElement> {
  postData: IFeed
  forwardedAs?: any
}

export type { IPostProps }
