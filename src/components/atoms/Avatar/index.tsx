import { useAvatar } from './logic'
import { AvatarStyle, DefaultAvatar } from './styles'
import type { IAvatarProps } from './types'

import composeClassName from 'utils/composeClassName'

const Avatar = ({ size, className, ...props }: IAvatarProps) => {
  const { avatar } = useAvatar()

  return avatar ? (
    <AvatarStyle
      alt='avatar'
      src={avatar}
      style={{ width: size, height: size }}
      className={composeClassName('Avatar', className)}
      {...props}
    />
  ) : (
    <DefaultAvatar
      style={{ width: size, height: size }}
      className={composeClassName('Avatar', className)}
    />
  )
}

export default Avatar
