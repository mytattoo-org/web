import { useSignIn } from './logic'
import { SignInStyle } from './styles'
import type { ISignInProps } from './types'

import Close from 'components/atoms/Icon/icons/Close'
import Loading from 'components/atoms/Icon/icons/Loading'

import Button from 'components/molecules/Button'
import Field from 'components/molecules/Field'

const SignIn = (props: ISignInProps) => {
  const { formik, loading, onCloseClick, enableSubmit, onSignUpClick } =
    useSignIn()

  return loading ? (
    <div className='loadingWrapper' data-cy='loading'>
      <Loading />
    </div>
  ) : (
    <SignInStyle {...props}>
      <nav>
        <button data-cy='close' onClick={onCloseClick}>
          <Close />
        </button>
      </nav>

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

        <Button type='submit' data-cy='signInSubmit' disabled={!enableSubmit}>
          Entrar
        </Button>

        <Button data-cy='signUpButton' onClick={onSignUpClick}>
          Cadastrar
        </Button>
      </form>
    </SignInStyle>
  )
}

export default SignIn
