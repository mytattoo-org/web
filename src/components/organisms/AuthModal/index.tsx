import { useAuthModal } from './logic'
import { AuthModalStyle } from './styles'
import type { IAuthModalProps } from './types'

import SignIn from '../SignIn'
import SignUp from '../SignUp'

const AuthModal = (props: IAuthModalProps) => {
  const { page, onBackgroundClick } = useAuthModal()

  return (
    <AuthModalStyle {...props}>
      {page === 'sign-in' ? (
        <SignIn data-cy='signInModal' />
      ) : (
        <SignUp data-cy='signUpModal' />
      )}

      <div className='transparentBackground' onClick={onBackgroundClick}></div>
    </AuthModalStyle>
  )
}

export default AuthModal
