import type { IIconStyleProps } from './types'

import styled from 'styled-components'

const IconStyle = styled.svg<IIconStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  path {
    fill: ${({ color }) => color};
  }
`

export { IconStyle }
