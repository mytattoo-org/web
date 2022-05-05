import type { IInputProps, IUseInputParams } from './types'

import { useState } from 'react'
import { useTheme } from 'styled-components'

const useInput = ({ onMouseDown, onBlur }: IUseInputParams) => {
  const theme = useTheme()
  const outlineStyle = `1px solid ${theme.colors.primary}`
  const [outline, setOutline] = useState(outlineStyle)

  const onInputDown: IInputProps['onClick'] = event => {
    setOutline('none')

    onMouseDown && onMouseDown(event)
  }

  const onInputBlur: IInputProps['onBlur'] = event => {
    setOutline(outlineStyle)

    onBlur && onBlur(event)
  }

  return { outline, onInputBlur, onInputDown }
}

export { useInput }
