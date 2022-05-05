import { useNavbar } from './logic'
import { NavbarStyle } from './styles'

import DisplayOptions from 'components/molecules/DisplayOptions'
import ProfileOptions from 'components/molecules/ProfileOptions'
import Search from 'components/molecules/Search'

import AuthOptions from 'components/organisms/AuthOptions'

const Navbar = () => {
  const { isAuth } = useNavbar()

  return (
    <NavbarStyle id='nav'>
      <ul>
        <li>
          <DisplayOptions />
        </li>

        <li>
          <Search />
        </li>

        <li>{isAuth ? <ProfileOptions /> : <AuthOptions />}</li>
      </ul>
    </NavbarStyle>
  )
}

export default Navbar
