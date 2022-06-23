import { useProfileOptions } from './logic'
import { ProfileOptionsStyle } from './styles'

import Avatar from 'components/atoms/Avatar'
import ArtistHeart from 'components/atoms/Icon/icons/ArtistHeart'
import Heart from 'components/atoms/Icon/icons/Heart'
import Logout from 'components/atoms/Icon/icons/Logout'

const ProfileOptions = () => {
  const { onLogoutClick } = useProfileOptions()

  return (
    <ProfileOptionsStyle>
      <li>
        <ArtistHeart />
      </li>

      <li>
        <Heart />
      </li>

      <li id='avatar'>
        <Avatar size={40} src='/temp/avatar.png' />

        <button type='button' onClick={onLogoutClick}>
          <Logout />
        </button>
      </li>
    </ProfileOptionsStyle>
  )
}

export default ProfileOptions
