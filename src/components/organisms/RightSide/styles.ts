import type { IRightSideStyleProps } from './types'

import styled from 'styled-components'

const RightSideStyle = styled.aside<IRightSideStyleProps>`
  right: 0;

  display: flex;
  flex-flow: column nowrap;

  padding: 0 24px;
  max-width: 400px;

  overflow-x: hidden;
  overflow-y: scroll;

  section + section {
    margin-top: 24px;
  }
`

export { RightSideStyle }
