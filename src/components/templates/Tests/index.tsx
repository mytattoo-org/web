import { TestsStyle } from './styles'
import type { ITestsProps } from './types'

import Tooltip from 'components/molecules/Tooltip'

const Tests = (props: ITestsProps) => {
  return (
    <TestsStyle {...props}>
      <Tooltip content={'Hello world my name is Miguel'} />
    </TestsStyle>
  )
}

export default Tests
