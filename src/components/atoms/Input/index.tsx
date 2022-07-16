import { InputStyle } from './styles'
import type { IInputProps } from './types'

import composeClassName from 'utils/composeClassName'

const Input = ({ className, ...props }: IInputProps) => {
  return (
    <InputStyle className={composeClassName('Input', className)} {...props} />
  )
}

export default Input
