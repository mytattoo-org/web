import { TestsStyle } from './styles'
import type { ITestsProps } from './types'

import { Resizable } from 'components/atoms/Resizable'

const Tests = (props: ITestsProps) => {
  return (
    <TestsStyle {...props}>
      <Resizable minWidth={20} maxWidth={300}>
        <div style={{ height: 30, backgroundColor: 'red' }}></div>
      </Resizable>
    </TestsStyle>
  )
}

export default Tests
