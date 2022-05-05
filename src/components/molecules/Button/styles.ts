import { IButtonStyleProps } from './types'

import { darken, transparentize } from 'polished'
import styled, { css } from 'styled-components'

const ButtonStyle = styled.button<IButtonStyleProps>`
  display: flex;
  align-items: center;

  padding: 4px 8px;
  border-radius: 4px;

  .Icon {
    width: 15px;
    height: 15px;
  }

  .Icon {
    margin-right: 8px;
  }

  ${({ theme, variant }) =>
    variant === 'primary'
      ? css`
          color: ${theme.colors.secondary};
          background-color: ${theme.colors.primary};
          border: solid 1px ${theme.colors.primary};

          .Icon path {
            fill: ${theme.colors.secondary};
          }

          &:disabled {
            color: ${darken(0.3, theme.colors.secondary)};
            border: solid 1px ${transparentize(0.6, theme.colors.primary)};
            background-color: ${transparentize(0.6, theme.colors.primary)};

            .Icon path {
              fill: ${transparentize(0.6, theme.colors.secondary)};
            }
          }
        `
      : css`
          color: ${theme.colors.secondary};
          background-color: ${theme.colors.primary};
          border: solid 1px ${theme.colors.primary};

          .Icon path {
            fill: ${theme.colors.secondary};
          }

          &:disabled {
            color: ${theme.colors.primary};
            background-color: ${theme.colors.background};
            border: solid 1px ${theme.colors.primary};

            .Icon path {
              fill: ${theme.colors.primary};
            }
          }
        `}
`

export { ButtonStyle }
