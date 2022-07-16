import useWindowSize from 'hooks/useWindowSize'

import { NavbarContext } from 'components/layouts/NavbarLayout/logic'
import { useContext } from 'react'

const useAuthOptions = () => {
  const { innerWidth } = useWindowSize()
  const { toggleAuthModal } = useContext(NavbarContext)

  const onSignInClick = () => {
    toggleAuthModal({ open: true, page: 'sign-in' })
  }

  const onSignUpClick = () => {
    toggleAuthModal({ open: true, page: 'sign-up' })
  }

  const isSmall = innerWidth ? innerWidth < 600 : false

  return { onSignInClick, onSignUpClick, isSmall }
}

export { useAuthOptions }
