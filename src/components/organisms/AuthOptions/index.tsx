import { useAuthOptions } from './logic'
import { AuthOptionsStyle, SignInButton, SignUpButton } from './styles'
import type { IAuthOptionsProps } from './types'

import DefaultAvatar from 'components/atoms/Icon/icons/DefaultAvatar'

const AuthOptions = (props: IAuthOptionsProps) => {
  const { onSignInClick, onSignUpClick, isSmall } = useAuthOptions()

  return (
    <AuthOptionsStyle {...props}>
      {isSmall ? (
        <li>
          <button type='button' onClick={onSignInClick} data-cy='defaultAvatar'>
            <DefaultAvatar />
          </button>
        </li>
      ) : (
        <>
          <li>
            <SignInButton
              variant='secondary'
              onClick={onSignInClick}
              data-cy='openSignInModal'
            >
              Entrar
            </SignInButton>
          </li>

          <li>
            <SignUpButton data-cy='openSignUpModal' onClick={onSignUpClick}>
              Registrar
            </SignUpButton>
          </li>
        </>
      )}
    </AuthOptionsStyle>
  )
}

export default AuthOptions
