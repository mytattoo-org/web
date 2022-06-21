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
    .Field + .Field {
      margin-top: 24px;
    }
  }
`

export { SignInStyle, SignInButton }
