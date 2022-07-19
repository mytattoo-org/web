import type { ISignInStyleProps } from './types'

import styled from 'styled-components'

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
`

export { SignInStyle }
