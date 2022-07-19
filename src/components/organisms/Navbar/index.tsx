import { useNavbar } from './logic'
import { Content, NavbarStyle, Shortcuts } from './styles'

import Loading from 'components/atoms/Icon/icons/Loading'

import DisplayOptions from 'components/molecules/DisplayOptions'
import ProfileOptions from 'components/molecules/ProfileOptions'
import Search from 'components/molecules/Search'

import AuthOptions from 'components/organisms/AuthOptions'

const Navbar = () => {
  const { isAuth, shortcuts, loading } = useNavbar()

  return (
    <NavbarStyle>
      <Shortcuts aria-label='Atalhos'>
        {shortcuts.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} target='_self'>
              {label}
            </a>
          </li>
        ))}
      </Shortcuts>

      <Content>
        <li>
          <DisplayOptions />
        </li>

        <li>
          <Search />
        </li>

        <li>
          {loading ? (
            <Loading />
          ) : isAuth ? (
            <ProfileOptions />
          ) : (
            <AuthOptions />
          )}
        </li>
      </Content>
    </NavbarStyle>
  )
}

export default Navbar
