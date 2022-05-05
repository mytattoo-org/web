import type { IInputStyleProps } from './types'

import styled, { css } from 'styled-components'

const InputStyle = styled.input<IInputStyleProps>`
  width: 100%;
  height: 100%;
  padding-left: 8px;
  padding-right: 4px;

  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};

  &:focus {
    outline: ${({ outline }) => outline};
  }

  &:-webkit-autofill {
    color: ${({ theme }) => theme.colors.secondary};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.background} inset;
  }

  ${({ theme, outlined }) =>
    outlined &&
    css`
      border-radius: 16px;

      border: solid 1px ${theme.colors.secondary};
    `}
`

export { InputStyle }
