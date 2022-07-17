interface IPostHeaderStyleProps {
  avatarSize: number
  isArtist: boolean
}

interface IPostHeaderProps {
  name: string
  avatar: string
  isArtist: boolean
  description?: string
}

export type { IPostHeaderProps, IPostHeaderStyleProps }
