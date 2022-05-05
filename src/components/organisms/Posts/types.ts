import type { IPostHeaderProps } from 'components/molecules/PostHeader/types'

interface IPost {
  id: string
  description: string
}

interface IAuthor {
  name: string
  avatar: string
  isArtist: boolean
}

type TPostsResponse = (IPost & {
  author: IAuthor
})[]

interface IFormattedData {
  id: string
  headerData: IPostHeaderProps
}

export type { TPostsResponse, IFormattedData }
