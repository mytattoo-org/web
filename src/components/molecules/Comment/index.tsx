import { CommentStyle } from './styles'
import type { ICommentProps } from './types'

import Avatar from 'components/atoms/Avatar'

const Comment = ({
  name,
  content,
  avatar,
  isArtist,
  forwardedAs,
  ...props
}: ICommentProps) => (
  <CommentStyle isArtist={isArtist} as={forwardedAs} {...props}>
    <Avatar size={40} src={avatar} aria-hidden='true' />

    <p>
      <b>{name}</b> {content}
    </p>
  </CommentStyle>
)

export default Comment
