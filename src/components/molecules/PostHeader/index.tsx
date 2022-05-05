import { PostHeaderStyle } from './styles'
import type { IPostHeaderProps } from './types'

import Avatar from 'components/atoms/Avatar'

const PostHeader = ({
  name,
  avatar,
  isArtist,
  description,
  ...props
}: IPostHeaderProps) => {
  const avatarSize = 40

  return (
    <PostHeaderStyle avatarSize={avatarSize} isArtist={isArtist} {...props}>
      <Avatar
        tabIndex={0}
        src={avatar}
        size={avatarSize}
        alt='Avatar do autor da postagem'
      />

      {isArtist && <b tabIndex={0}>Artista</b>}

      <strong aria-label='Nome do autor' tabIndex={0}>
        {name}
      </strong>

      <p aria-label='Descrição da postagem' tabIndex={0}>
        {description}
      </p>
    </PostHeaderStyle>
  )
}

export default PostHeader
