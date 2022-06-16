import { useSignIn } from './logic'
import { SignInButton, SignInStyle } from './styles'
import type { ISignInProps } from './types'

import Close from 'components/atoms/Icon/icons/Close'
import Loading from 'components/atoms/Icon/icons/Loading'

import Field from 'components/molecules/Field'

import { ModalButton } from 'components/organisms/AuthModal/styles'

const SignIn = (props: ISignInProps) => {
  const { formik, loading, onCloseClick, enableSubmit, onSignUpClick } =
    useSignIn()

  return (
    <SignInStyle {...props}>
      <nav>
        <button data-cy='close' onClick={onCloseClick}>
          <Close />
        </button>
      </nav>

      {loading ? (
        <div className='loadingWrapper' data-cy='loading'>
          <Loading />
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit} data-cy='signIn'>
          <Field
            formik={formik}
            name='usernameOrEmail'
            ariaName='username or email'
            label='Nome de usuário ou E-mail'
          />

          <Field
            label='Senha'
            name='password'
            type='password'
            formik={formik}
            ariaName='password'
          />

          <SignInButton
            type='submit'
            active={enableSubmit}
            data-cy='signInSubmit'
            disabled={!enableSubmit}
          >
            Entrar
          </SignInButton>

          <ModalButton data-cy='signUpButton' onClick={onSignUpClick}>
            Cadastrar
          </ModalButton>

          {/*
            <GoogleButton icon={<Google size={24} />}>
              Entrar com o Google
            </GoogleButton>
          */}
        </form>
      )}
    </SignInStyle>
  )
}

export default SignIn
