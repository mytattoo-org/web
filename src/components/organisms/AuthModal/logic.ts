import { FeedContext } from 'components/templates/Feed/logic'

import { useContext } from 'react'

const useAuthModal = () => {
  const { showAuthModal, toggleShowAuthModal } = useContext(FeedContext)

  document.addEventListener('keypress', e => {
    if (e.key === 'Escape')
      toggleShowAuthModal({ open: false, page: 'sign-in' })
  })

  const onBackgroundClick = () => {
    toggleShowAuthModal({ open: false, page: 'sign-in' })
  }

  return { page: showAuthModal.page, onBackgroundClick }
}

export { useAuthModal }
