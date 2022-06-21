import type { ISignUpStyleProps } from './types'

import { ModalButton } from '../AuthModal/styles'

import styled from 'styled-components'

const SignUpSubmit = styled(ModalButton)`
  margin-top: 24px;
`

const SignUpStyle = styled.section<ISignUpStyleProps>`
  nav {
    justify-content: space-between;
  }

  form {
    .Field {
      & + .Field {
        margin-top: 24px;
      }

      .Tooltip .Content {
        width: min(354px, 100vw - 48px - 16px);
      }
    }
  }
`

export { SignUpStyle, SignUpSubmit }
