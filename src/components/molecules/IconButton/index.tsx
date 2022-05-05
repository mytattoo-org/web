import { IconButtonStyle } from './styles'
import type { IIconButtonProps } from './types'

import { composeClassName } from 'utils/composeClassName'

const IconButton = ({
  outlined,
  className,
  ariaLabel,
  icon: Icon,
  type = 'button',
  outlinedAriaLabel,
  outlinedIcon: OutlinedIcon,
  ...buttonProps
}: IIconButtonProps) => (
  <IconButtonStyle
    type={type}
    className={composeClassName('IconButton', className)}
    aria-label={outlined ? outlinedAriaLabel : ariaLabel}
    {...buttonProps}
  >
    {outlined ? OutlinedIcon : Icon}
  </IconButtonStyle>
)

export default IconButton
