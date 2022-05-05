import { IPostHeaderStyleProps } from './types'

import styled, { css } from 'styled-components'

const PostHeaderStyle = styled.header<IPostHeaderStyleProps>`
  display: grid;
  ${({ isArtist }) => css`
    grid:
      'avatar name' calc(40px / 2)
      'avatar ${isArtist ? 'isArtist' : 'name'}' calc(40px / 2)
      'description description' auto / 40px auto;
  `}

  margin-bottom: 16px;

  img {
    grid-area: avatar;

    border-radius: 50%;
    outline-offset: -2px;
  }

  strong {
    grid-area: name;

    display: flex;
    align-items: center;

    margin-left: 8px;
  }

  b {
    grid-area: isArtist;
    margin-left: 8px;

    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    grid-area: description;

    margin-top: 8px;
  }
`

export { PostHeaderStyle }
