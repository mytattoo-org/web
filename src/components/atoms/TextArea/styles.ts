import type { ITextAreaStyleProps } from './types'

import styled from 'styled-components'

const TextAreaStyle = styled.textarea<ITextAreaStyleProps>`
  &:focus {
    outline: ${({ outline }) => outline};
  }
`

export { TextAreaStyle }
