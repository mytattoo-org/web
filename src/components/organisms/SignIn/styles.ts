import type { ISignInStyleProps } from './types'

import { ModalButton } from '../AuthModal/styles'

import styled from 'styled-components'

interface ISignInButtonStyleProps {
  active?: boolean
}

const SignInButton = styled(ModalButton)<ISignInButtonStyleProps>`
  margin-bottom: 24px;
`

const SignInStyle = styled.section<ISignInStyleProps>`
  nav {
    justify-content: flex-end;
  }
`

export { SignInStyle, SignInButton }
