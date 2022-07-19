import type { ISignUpStyleProps } from './types'

import Button from 'components/molecules/Button'

import styled from 'styled-components'

const SignUpSubmit = styled(Button)`
  height: 50px;
`

const SignUpStyle = styled.section<ISignUpStyleProps>`
  position: relative;

  nav {
    position: relative;
    z-index: 2;
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

  .logoWrapper {
    position: absolute;
    left: 0;
    top: 0;

    padding: 24px;
    border-radius: 16px;
    padding-bottom: 64px;
    transform: translate(0%, -50%);

    .Icon {
      width: 120px;
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`

export { SignUpStyle, SignUpSubmit }
