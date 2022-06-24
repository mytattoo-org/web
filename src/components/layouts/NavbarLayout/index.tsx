import { NavbarContext, useNavbarLayout } from './logic'
import type { INavbarProps } from './types'

import AuthModal from 'components/organisms/AuthModal'
import Navbar from 'components/organisms/Navbar'

const NavbarLayout = ({ children }: INavbarProps) => {
  const { context } = useNavbarLayout()

  return (
    <>
      <NavbarContext.Provider value={context}>
        {context.showAuthModal.open && <AuthModal />}

        <Navbar />
      </NavbarContext.Provider>

      {children}
    </>
  )
}

export default NavbarLayout
