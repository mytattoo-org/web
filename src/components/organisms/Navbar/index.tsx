import { useNavbar } from './logic'
import { Content, NavbarStyle, Shortcuts } from './styles'

import DisplayOptions from 'components/molecules/DisplayOptions'
import ProfileOptions from 'components/molecules/ProfileOptions'
import Search from 'components/molecules/Search'

import AuthOptions from 'components/organisms/AuthOptions'

const Navbar = () => {
  const { isAuth, shortcuts } = useNavbar()

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

        <li>{isAuth ? <ProfileOptions /> : <AuthOptions />}</li>
      </Content>
    </NavbarStyle>
  )
}

export default Navbar
