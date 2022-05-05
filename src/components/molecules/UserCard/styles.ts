import type { IUserCardStyleProps } from './types'

import { darken, lighten } from 'polished'
import styled from 'styled-components'

const UserCardStyle = styled.button<IUserCardStyleProps>`
  display: grid;
  grid:
    'avatar name' 23px
    'avatar smallBio' 23px / 62px auto;

  padding: 16px;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.background)};
  }

  strong {
    grid-area: name;
    text-align: left;

    color: ${({ theme }) => theme.colors.secondary};
  }

  .smallBio {
    text-align: left;
    grid-area: smallBio;

    color: ${({ theme }) => lighten(0.6, theme.colors.background)};
  }
`

export { UserCardStyle }
