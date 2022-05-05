import { UserCardStyle } from './styles'
import type { IUserCardProps } from './types'

import Avatar from 'components/atoms/Avatar'

const UserCard = ({ avatar, name, smallBio, ...props }: IUserCardProps) => (
  <UserCardStyle {...props}>
    <Avatar size={46} src={avatar} alt='Avatar do usuário' />

    <strong>{name}</strong>

    <span className='smallBio'>{smallBio}</span>
  </UserCardStyle>
)

export default UserCard
