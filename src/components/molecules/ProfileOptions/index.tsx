import { useProfileOptions } from './logic'
import { ProfileOptionsStyle } from './styles'

import Avatar from 'components/atoms/Avatar'
import ArtistHeart from 'components/atoms/Icon/icons/ArtistHeart'
import EditProfile from 'components/atoms/Icon/icons/EditProfile'
import Heart from 'components/atoms/Icon/icons/Heart'
import Logout from 'components/atoms/Icon/icons/Logout'

const ProfileOptions = () => {
  const { onLogoutClick } = useProfileOptions()

  return (
    <ProfileOptionsStyle>
      <li>
        <button type='button'>
          <Heart />
        </button>
      </li>

      <li>
        <button type='button'>
          <ArtistHeart />
        </button>
      </li>

      <li>
        <button type='button'>
          <EditProfile />
        </button>
      </li>

      <li id='avatar'>
        <button type='button'>
          <Avatar size={40} src='/temp/avatar.png' />
        </button>

        <button type='button' onClick={onLogoutClick}>
          <Logout />
        </button>
      </li>
    </ProfileOptionsStyle>
  )
}

export default ProfileOptions
