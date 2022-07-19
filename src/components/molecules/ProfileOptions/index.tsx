import { useProfileOptions } from './logic'
import { AvatarLi, Navbar, ProfileOptionsStyle, Sidebar } from './styles'

import ListItem from './ListItem'
import { IOption } from './ListItem/types'
import { sidebarAnimationProps } from './animations'

import Avatar from 'components/atoms/Avatar'
import ArtistHeart from 'components/atoms/Icon/icons/ArtistHeart'
import EditProfile from 'components/atoms/Icon/icons/EditProfile'
import Heart from 'components/atoms/Icon/icons/Heart'
import Logout from 'components/atoms/Icon/icons/Logout'

const options: IOption[] = [
  {
    label: 'Seguindo',
    name: 'following',
    icon: <Heart data-cy='likes' />
  },
  {
    label: 'Curtidas',
    name: 'Likes',
    icon: <ArtistHeart data-cy='following' />
  },
  {
    name: 'edit-profile',
    label: 'Editar perfil',
    icon: <EditProfile data-cy='edit-profile' />
  }
]

const ProfileOptions = () => {
  const { onLogoutClick, showSidebar, setShowSidebar } = useProfileOptions()

  return (
    <ProfileOptionsStyle>
      <Navbar>
        {options.map(({ name }, index) => (
          <ListItem
            key={name}
            index={index}
            options={options}
            condition={!showSidebar}
            onClick={() => {
              setShowSidebar(false)
            }}
          />
        ))}

        <AvatarLi showSidebar={showSidebar}>
          <button type='button' onClick={() => setShowSidebar(!showSidebar)}>
            <Avatar size={40} />
          </button>

          <button type='button' onClick={onLogoutClick}>
            <Logout />
          </button>
        </AvatarLi>
      </Navbar>

      <Sidebar {...sidebarAnimationProps(options, showSidebar)}>
        {options.map(({ name }, index) => (
          <ListItem
            onSidebar
            key={name}
            index={index}
            options={options}
            condition={showSidebar}
          />
        ))}
      </Sidebar>
    </ProfileOptionsStyle>
  )
}
export default ProfileOptions
