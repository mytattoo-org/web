import { FeedContext } from 'components/templates/Feed/logic'

import useWindowSize from 'hooks/useWindowSize'

import { useContext } from 'react'

const useAuthOptions = () => {
  const { innerWidth } = useWindowSize()
  const { toggleShowAuthModal } = useContext(FeedContext)

  const onSignInClick = () => {
    toggleShowAuthModal({ open: true, page: 'sign-in' })
  }

  const onSignUpClick = () => {
    toggleShowAuthModal({ open: true, page: 'sign-up' })
  }

  const isSmall = innerWidth ? innerWidth < 600 : false

  return { onSignInClick, onSignUpClick, isSmall }
}

export { useAuthOptions }
