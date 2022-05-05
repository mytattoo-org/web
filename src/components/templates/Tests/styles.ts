import type { ITestsStyleProps } from './types'

import styled from 'styled-components'

const TestsStyle = styled.div<ITestsStyleProps>`
  display: flex;
  align-items: center;
`

export { TestsStyle }
