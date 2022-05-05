import { FeedContext } from 'components/templates/Feed/logic'

import { useContext } from 'react'

const useAuthOptions = () => {
  const { toggleShowAuthModal } = useContext(FeedContext)

  const onSignInClick = () => {
    toggleShowAuthModal({ open: true, page: 'sign-in' })
  }

  const onSignUpClick = () => {
    toggleShowAuthModal({ open: true, page: 'sign-up' })
  }

  return { onSignInClick, onSignUpClick }
}

export { useAuthOptions }
