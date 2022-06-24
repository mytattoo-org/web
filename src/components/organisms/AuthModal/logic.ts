import { NavbarContext } from 'components/layouts/NavbarLayout/logic'
import { useContext } from 'react'

const useAuthModal = () => {
  const { showAuthModal, toggleAuthModal } = useContext(NavbarContext)

  document.addEventListener('keypress', e => {
    if (e.key === 'Escape') toggleAuthModal({ open: false, page: 'sign-in' })
  })

  const onBackgroundClick = () => {
    toggleAuthModal({ open: false, page: 'sign-in' })
  }

  return { page: showAuthModal.page, onBackgroundClick }
}

export { useAuthModal }
