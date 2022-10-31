import type { IUserCardStyleProps } from './types'

import { darken, lighten } from 'polished'
import styled, { css } from 'styled-components'

const UserCardStyle = styled.button<IUserCardStyleProps>`
  ${({ smallBio }) =>
    smallBio
      ? css`
          display: grid;
          grid:
            'avatar name' 23px
            'avatar smallBio' 23px / 62px auto;
        `
      : css`
          display: flex;
          align-items: center;
        `}

  padding: 16px;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.background)};
  }

  strong {
    grid-area: name;
    text-align: left;
    margin-left: ${({ smallBio }) => (smallBio ? 0 : 16)}px;

    color: ${({ theme }) => theme.colors.secondary};
  }

  .smallBio {
    text-align: left;
    grid-area: smallBio;

    color: ${({ theme }) => lighten(0.6, theme.colors.background)};
  }
`

export { UserCardStyle }
