import { TestsStyle } from './styles'
import type { ITestsProps } from './types'

import { Resizable } from 'components/atoms/Resizable'

const Tests = (props: ITestsProps) => {
  return (
    <TestsStyle {...props}>
      <Resizable minWidth={20} maxWidth={30}>
        <div
          style={{ width: '100%', height: 30, backgroundColor: 'red' }}
        ></div>
      </Resizable>
    </TestsStyle>
  )
}

export default Tests
