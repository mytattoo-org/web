import { IFeed } from '@common/types/posts/models/feedModel.types'

interface IPostStore {
  loading?: boolean
  feed: { posts: IFeed[] }
}

export type { IPostStore }
