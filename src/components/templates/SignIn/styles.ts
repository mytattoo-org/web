import type { ISignInStyleProps } from './types'

import styled from 'styled-components'

const SignInStyle = styled.section<ISignInStyleProps>`
  position: relative;

  nav {
    justify-content: flex-end;
  }

  form {
    .Logo {
      height: 100px;
      padding: 16px 0;

      fill: ${({ theme }) => theme.colors.primary};
    }

    .Field {
      width: 350px;

      + .Field {
        margin-top: 24px;
      }
    }

    .Button {
      height: 50px;

      margin-top: 24px;
    }
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

export { SignInStyle }
