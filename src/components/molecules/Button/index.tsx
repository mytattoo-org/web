import { ButtonStyle } from './styles'
import type { IButtonProps } from './types'

import composeClassName from 'utils/composeClassName'

const Button = ({
  children,
  className,
  icon: Icon,
  ...props
}: IButtonProps) => (
  <ButtonStyle
    type='button'
    className={composeClassName('Button', className)}
    {...props}
  >
    {Icon && Icon}

    <span>{children}</span>
  </ButtonStyle>
)

export default Button
