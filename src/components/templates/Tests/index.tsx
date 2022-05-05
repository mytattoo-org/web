import { TestsStyle } from './styles'
import type { ITestsProps } from './types'

import { useState } from 'react'

const Tests = (props: ITestsProps) => {
  const [counter, setCounter] = useState(0)

  return (
    <TestsStyle {...props}>
      <button
        style={{ color: 'white', border: 'solid red 1px', width: 300 }}
        onClick={() => setCounter(prev => prev + 1)}
      >
        {counter}
      </button>
    </TestsStyle>
  )
}

export default Tests
