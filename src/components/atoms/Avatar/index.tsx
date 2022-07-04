import { useAvatar } from './logic'
import { AvatarStyle, DefaultAvatar } from './styles'
import type { IAvatarProps } from './types'

import composeClassName from 'utils/composeClassName'

const Avatar = ({ size, className, src, ...props }: IAvatarProps) => {
  const { avatar } = useAvatar()

  return avatar || src ? (
    <AvatarStyle
      alt='avatar'
      src={src || avatar}
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
