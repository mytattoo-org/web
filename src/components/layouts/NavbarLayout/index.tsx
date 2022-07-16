import { NavbarContext, useNavbarLayout } from './logic'
import type { INavbarProps } from './types'

import Feedback from 'components/molecules/Feedback'

import AuthModal from 'components/organisms/AuthModal'
import Navbar from 'components/organisms/Navbar'

const NavbarLayout = ({ children }: INavbarProps) => {
  const { feedbackRef, context } = useNavbarLayout()

  return (
    <NavbarContext.Provider value={context}>
      {context.showAuthModal.open && <AuthModal />}

      <Navbar />

      <Feedback ref={feedbackRef} />

      {children}
    </NavbarContext.Provider>
  )
}

export default NavbarLayout
