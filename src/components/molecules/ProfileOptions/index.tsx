import { useProfileOptions } from './logic'
import { ProfileOptionsStyle } from './styles'

import Avatar from 'components/atoms/Avatar'
import ArtistHeart from 'components/atoms/Icon/icons/ArtistHeart'
import EditProfile from 'components/atoms/Icon/icons/EditProfile'
import Heart from 'components/atoms/Icon/icons/Heart'
import Logout from 'components/atoms/Icon/icons/Logout'

import { useRouter } from 'next/router'

const ProfileOptions = () => {
  const { onLogoutClick } = useProfileOptions()

  const router = useRouter()

  return (
    <ProfileOptionsStyle>
      <li>
        <button data-cy='likes' onClick={() => router.push('likes')}>
          <Heart data-cy='likes' />
        </button>
      </li>

      <li>
        <button data-cy='following' onClick={() => router.push('following')}>
          <ArtistHeart data-cy='following' />
        </button>
      </li>

      <li>
        <button
          onClick={() => router.push('edit-profile')}
          data-cy='edit-profile'
        >
          <EditProfile href='/edit-profile' />
        </button>
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
