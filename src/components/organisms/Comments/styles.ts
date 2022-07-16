import { motion } from 'framer-motion'
import styled from 'styled-components'

const CreateCommentStyle = styled(motion.form)`
  label {
    width: 100%;
    border-radius: 4px;

    padding: 8px;
    border: solid ${({ theme }) => theme.colors.secondary} 1px;
  }
`

const CommentsList = styled(motion.ul)`
  overflow: hidden;

  li {
    margin-bottom: 24px;
  }
`

const CommentsStyle = styled(motion.div)``

export { CommentsStyle, CreateCommentStyle, CommentsList }
