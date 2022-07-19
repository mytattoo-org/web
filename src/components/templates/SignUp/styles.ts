import type { ISignUpStyleProps } from './types'

import Button from 'components/molecules/Button'

import styled from 'styled-components'

const SignUpSubmit = styled(Button)`
  height: 50px;
`

const SignUpStyle = styled.section<ISignUpStyleProps>`
  nav {
    justify-content: space-between;
  }

  form {
    .Field {
      width: 350px;

      + .Field {
        margin-top: 24px;
      }
    }
  }

  .Button {
    margin-top: 24px;
  }
`

export { SignUpStyle, SignUpSubmit }
