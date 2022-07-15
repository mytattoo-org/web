import { IButtonStyleProps } from './types'

import styled, { css } from 'styled-components'

const ButtonStyle = styled.button<IButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 4px 8px;
  border-radius: 4px;

  .Icon {
    width: 15px;
    height: 15px;
    margin-right: 8px;
  }

  ${({ theme }) =>
    css`
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.primary};
      border: solid 1px ${theme.colors.primary};

      .Icon path {
        fill: ${theme.colors.secondary};
      }

      &:disabled {
        color: ${theme.colors.primary};
        border: solid 1px ${theme.colors.primary};
        background-color: ${theme.colors.background};

        .Icon path {
          fill: ${theme.colors.primary};
        }
      }
    `}
`

export { ButtonStyle }
