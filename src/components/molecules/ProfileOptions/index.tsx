import { useProfileOptions } from './logic'
import { ProfileOptionsStyle, Sidebar } from './styles'

import {
  labelAnimationProps,
  navbarItemsAnimationProps,
  sidebarAnimationProps,
  sidebarItemsAnimationProps
} from './animations'

import Avatar from 'components/atoms/Avatar'
import ArtistHeart from 'components/atoms/Icon/icons/ArtistHeart'
import EditProfile from 'components/atoms/Icon/icons/EditProfile'
import Heart from 'components/atoms/Icon/icons/Heart'
import Logout from 'components/atoms/Icon/icons/Logout'
import Presence from 'components/atoms/Presence'

import { motion } from 'framer-motion'

const options = [
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
  const { onLogoutClick, showSidebar, setShowSidebar, router } =
    useProfileOptions()

  return (
    <ProfileOptionsStyle showSidebar={showSidebar}>
      {options.map(({ icon: Icon, name }, index) => (
        <Presence key={name} condition={!showSidebar}>
          <motion.li {...navbarItemsAnimationProps(options, index)}>
            <button type='button' onClick={() => router.push(name)}>
              {Icon}
            </button>
          </motion.li>
        </Presence>
      ))}

      <li>
        <div id='avatar'>
          <button type='button' onClick={() => setShowSidebar(!showSidebar)}>
            <Avatar size={40} />
          </button>

          <button type='button' onClick={onLogoutClick}>
            <Logout />
          </button>
        </div>

        <Sidebar {...sidebarAnimationProps(options, showSidebar)}>
          {options.map(({ label, icon: Icon, name }, index) => (
            <Presence key={name} condition={showSidebar}>
              <motion.li {...sidebarItemsAnimationProps(options, index)}>
                <button type='button' onClick={() => router.push(name)}>
                  {Icon}

                  <motion.span {...labelAnimationProps(options, index)}>
                    {label}
                  </motion.span>
                </button>
              </motion.li>
            </Presence>
          ))}
        </Sidebar>
      </li>
    </ProfileOptionsStyle>
  )
}

export default ProfileOptions
