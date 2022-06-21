import { TestsStyle } from './styles'
import type { ITestsProps } from './types'

import Plus from 'components/atoms/Icon/icons/Plus'

import Tooltip from 'components/molecules/Tooltip'

const Tests = (props: ITestsProps) => {
  return (
    <TestsStyle {...props}>
      <Tooltip content={'Hello world my name is Miguel'} />
      <Plus />
    </TestsStyle>
  )
}

export default Tests
