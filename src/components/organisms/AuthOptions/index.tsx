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
          <button type='button' onClick={onSignInClick}>
            <DefaultAvatar />
          </button>
        </li>
      ) : (
        <>
          <li>
            <SignInButton onClick={onSignInClick} variant='secondary'>
              Entrar
            </SignInButton>
          </li>

          <li>
            <SignUpButton onClick={onSignUpClick}>Registrar</SignUpButton>
          </li>
        </>
      )}
    </AuthOptionsStyle>
  )
}

export default AuthOptions
