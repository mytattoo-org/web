import { ButtonStyle } from './styles'
import type { IButtonProps } from './types'

import { composeClassName } from 'utils/composeClassName'

const Button = ({
  children,
  className,
  icon: Icon,
  variant = 'primary',
  ...props
}: IButtonProps) => (
  <ButtonStyle
    type='button'
    variant={variant}
    className={composeClassName('Button', className)}
    {...props}
  >
    {Icon && Icon}

    {children}
  </ButtonStyle>
)

export default Button
