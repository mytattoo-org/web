import type { IAuthOptionsStyleProps } from './types'

import Button from 'components/molecules/Button'

import styled from 'styled-components'

const AuthOptionsStyle = styled.ul<IAuthOptionsStyleProps>`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  li {
    display: flex;
    align-items: center;

    button .Icon {
      width: 36px;
      height: 36px;

      path {
        fill: ${({ theme }) => theme.colors.red};
      }
    }

    & + li {
      margin-left: 16px;
    }
  }
`

const SignInButton = styled(Button)``

export { AuthOptionsStyle, SignInButton }
