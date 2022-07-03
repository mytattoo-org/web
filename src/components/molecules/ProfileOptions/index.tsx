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
        <Heart />
      </li>

      <li>
        <ArtistHeart />
      </li>

      <li>
        <EditProfile href='/edit-profile' />
      </li>

      <li id='avatar'>
        <button type='button'>
          <Avatar size={40} />
        </button>

        <button type='button' onClick={onLogoutClick}>
          <Logout />
        </button>
      </li>
    </ProfileOptionsStyle>
  )
}

export default ProfileOptions
