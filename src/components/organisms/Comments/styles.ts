import { motion } from 'framer-motion'
import styled from 'styled-components'

export const NewComment = styled.label`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 12px 12px;
  border-radius: 4px;

  border: solid 1px ${({ theme }) => theme.colors.secondary};
`

const CreateCommentStyle = styled(motion.form)`
  margin-top: 16px;
`

const CommentsList = styled(motion.ul)`
  position: relative;

  max-height: 320px;
  overflow-x: hidden;
  overflow-y: scroll;

  li + li {
    margin-top: 24px;
  }
`

const CommentsStyle = styled(motion.div)``

export { CommentsStyle, CreateCommentStyle, CommentsList }
