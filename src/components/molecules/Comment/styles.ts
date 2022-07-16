import type { ICommentStyleProps } from './types'

import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

const CommentStyle = styled(motion.li)<ICommentStyleProps>`
  display: flex;

  p {
    margin-left: 16px;
    width: calc(100% - 40px - 16px);

    b {
      ${({ theme, isArtist }) =>
        isArtist &&
        css`
          color: ${theme.colors.primary};
        `};
    }
  }
`

export { CommentStyle }
