import type { IStylesStyleProps } from './types'

import styled from 'styled-components'

const StylesStyle = styled.ul<IStylesStyleProps>`
  display: flex;
  flex-wrap: wrap;

  margin-top: 16px;
  max-height: 123px;
  overflow-y: scroll;

  li {
    padding: 4px;
  }
`

export { StylesStyle }
