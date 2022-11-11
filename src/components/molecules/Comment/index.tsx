import { CommentStyle } from './styles'
import type { ICommentProps } from './types'

import Avatar from 'components/atoms/Avatar'

import composeClassName from 'utils/composeClassName'

import { motion } from 'framer-motion'

const Comment = ({
  name,
  content,
  avatar,
  className,
  isArtist = false,
  ...props
}: ICommentProps) => (
  <CommentStyle
    isArtist={isArtist}
    className={composeClassName('Comment', className)}
    {...props}
  >
    <Avatar size={40} src={avatar} aria-hidden='true' />

    <motion.p>
      <b>{name}</b>
      <br /> {content}
    </motion.p>
  </CommentStyle>
)

export default Comment
