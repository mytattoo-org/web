import type { ISignUpStyleProps } from './types'

import styled from 'styled-components'

const SignUpStyle = styled.section<ISignUpStyleProps>`
  nav {
    justify-content: space-between;
  }

  form {
    .Field .Tooltip .content {
      width: min(354px, 100vw - 48px - 16px);
    }
  }
`

export { SignUpStyle }
