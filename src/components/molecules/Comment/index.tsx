import { CommentStyle } from './styles'
import type { ICommentProps } from './types'

import Avatar from 'components/atoms/Avatar'

import composeClassName from 'utils/composeClassName'

const Comment = ({
  name,
  content,
  avatar,
  className,
  forwardedAs,
  isArtist = false,
  ...props
}: ICommentProps) => (
  <CommentStyle
    as={forwardedAs}
    isArtist={isArtist}
    className={composeClassName('Comment', className)}
    {...props}
  >
    <Avatar size={40} src={avatar} aria-hidden='true' />

    <p>
      <b>{name}</b> {content}
    </p>
  </CommentStyle>
)

export default Comment
