import { useInput } from './logic'
import { InputStyle } from './styles'
import type { IInputProps } from './types'

const Input = ({ onBlur, onMouseDown, ...props }: IInputProps) => {
  const { onInputBlur, onInputDown, outline } = useInput({
    onBlur,
    onMouseDown
  })

  return (
    <InputStyle
      outline={outline}
      onBlur={onInputBlur}
      onMouseDown={onInputDown}
      {...props}
    />
  )
}

export default Input
