import type { IStylesStyleProps } from './types'

import styled from 'styled-components'

const StylesStyle = styled.ul<IStylesStyleProps>`
  display: flex;
  flex-wrap: wrap;

  max-height: 123px;
  margin-bottom: 16px;
  overflow-y: scroll;

  li {
    padding: 4px;
  }
`

export { StylesStyle }
