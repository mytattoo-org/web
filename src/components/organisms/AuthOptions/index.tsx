import { useAuthOptions } from './logic'
import { AuthOptionsStyle, SignInButton } from './styles'
import type { IAuthOptionsProps } from './types'

import DefaultAvatar from 'components/atoms/Icon/icons/DefaultAvatar'

const AuthOptions = (props: IAuthOptionsProps) => {
  const { onSignInClick, isSmall } = useAuthOptions()

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
            <SignInButton onClick={onSignInClick} data-cy='openSignInModal'>
              Entrar
            </SignInButton>
          </li>
        </>
      )}
    </AuthOptionsStyle>
  )
}

export default AuthOptions
