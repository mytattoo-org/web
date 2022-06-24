import type { IInputStyleProps } from './types'

import styled from 'styled-components'

const InputStyle = styled.input<IInputStyleProps>`
  padding-left: 8px;
  padding-right: 4px;

  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};

  &:-webkit-autofill {
    color: ${({ theme }) => theme.colors.secondary};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.background} inset;
  }
`

export { InputStyle }
