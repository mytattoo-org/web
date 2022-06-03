import { AvatarStyle } from './styles'
import type { IAvatarProps } from './types'

import composeClassName from 'utils/composeClassName'

const Avatar = ({ size, className, ...props }: IAvatarProps) => (
  <AvatarStyle
    alt='avatar'
    style={{ width: size, height: size }}
    className={composeClassName('Avatar', className)}
    {...props}
  />
)

export default Avatar
