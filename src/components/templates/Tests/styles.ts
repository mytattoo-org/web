import type { ITestsStyleProps } from './types'

import styled from 'styled-components'

const TestsStyle = styled.div<ITestsStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;

  .Icon.Plus {
    fill: red;
    border: solid red 1px;
  }
`

export { TestsStyle }
