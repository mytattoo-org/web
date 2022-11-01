import { IFeed } from '@common/types/posts/models/feedModel.types'

interface IPostStore {
  feed?: IFeed[]
  error?: string
  loading?: boolean
}

export type { IPostStore }
