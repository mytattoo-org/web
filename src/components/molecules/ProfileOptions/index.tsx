import { ProfileOptionsStyle } from './styles'

import Avatar from 'components/atoms/Avatar'
import ArtistHeart from 'components/atoms/Icon/icons/ArtistHeart'
import Heart from 'components/atoms/Icon/icons/Heart'

const ProfileOptions = () => (
  <ProfileOptionsStyle>
    <li>
      <ArtistHeart />
    </li>

    <li>
      <Heart />
    </li>

    <li>
      <Avatar size={40} src='/temp/avatar.png' />
    </li>
  </ProfileOptionsStyle>
)

export default ProfileOptions
