import type { IAuthOptionsStyleProps } from './types'

import Button from 'components/molecules/Button'

import styled from 'styled-components'

const AuthOptionsStyle = styled.ul<IAuthOptionsStyleProps>`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  li + li {
    margin-left: 16px;
  }
`

const SignInButton = styled(Button)`
  border-radius: 16px;
`

const SignUpButton = styled(Button)`
  border-radius: 16px;
`

export { AuthOptionsStyle, SignUpButton, SignInButton }
