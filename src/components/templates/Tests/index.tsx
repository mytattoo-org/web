import { TestsStyle } from './styles'
import type { ITestsProps } from './types'

import Button from 'components/molecules/Button'

const Tests = (props: ITestsProps) => {
  return (
    <TestsStyle {...props}>
      <Button disabled>Teste</Button>
    </TestsStyle>
  )
}

export default Tests
