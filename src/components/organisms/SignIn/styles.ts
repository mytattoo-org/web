import type { ISignInStyleProps } from './types'

import { ModalButton } from '../AuthModal/styles'

import styled from 'styled-components'

interface ISignInButtonStyleProps {
  active?: boolean
}

const SignInButton = styled(ModalButton)<ISignInButtonStyleProps>`
  margin: 24px 0;
`

const SignInStyle = styled.section<ISignInStyleProps>`
  nav {
    justify-content: flex-end;
  }

  form {
    .Logo {
      height: 100px;
      padding: 16px 0;

      fill: ${({ theme }) => theme.colors.primary};
    }

    .Field + .Field {
      margin-top: 24px;
    }
  }
`

export { SignInStyle, SignInButton }
