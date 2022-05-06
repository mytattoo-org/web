import Icon from '../../'
import type { IIconProps } from '../../types'

import composeClassName from 'utils/composeClassName'

const TooltipArrow = ({ className, ...props }: IIconProps) => (
  <Icon
    viewBox='0 0 894 657'
    className={composeClassName('TooltipArrow', className)}
    {...props}
  >
    <path d='M0.732242 1.69926e-05L421.65 643.592C427.324 652.559 437.115 657 446.999 657C456.882 657 466.766 652.559 472.348 643.592L893.266 -6.10352e-05C869.5 -6.09025e-05 850.203 -5.72705e-05 827.691 -5.53024e-05L66.3057 1.126e-05C43.7936 1.32281e-05 19.5 1.69927e-05 0.732242 1.69926e-05Z' />
  </Icon>
)

export default TooltipArrow
