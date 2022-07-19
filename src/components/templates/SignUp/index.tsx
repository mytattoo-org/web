import { useSignUp } from './logic'
import { SignUpStyle, SignUpSubmit } from './styles'
import type { ISignUpProps } from './types'

import Arrow from 'components/atoms/Icon/icons/Arrow'
import Close from 'components/atoms/Icon/icons/Close'
import Loading from 'components/atoms/Icon/icons/Loading'

import Field from 'components/molecules/Field'

const SignUp = (props: ISignUpProps) => {
  const { formik, onArrowClick, onCloseClick, loading, enableSubmit } =
    useSignUp()

  return loading ? (
    <div className='loadingWrapper' data-cy='loading'>
      <Loading />
    </div>
  ) : (
    <SignUpStyle {...props}>
      <nav>
        <button onClick={onArrowClick} data-cy='arrow'>
          <Arrow />
        </button>

        <button onClick={onCloseClick} data-cy='close'>
          <Close />
        </button>
      </nav>

      <form onSubmit={formik.handleSubmit} data-cy='signUp'>
        <Field name='username' label='Nome de usuário' formik={formik} />

        <Field type='email' name='email' label='E-mail' formik={formik} />

        <Field label='Senha' type='password' name='password' formik={formik} />

        <Field
          type='password'
          formik={formik}
          name='confirmPassword'
          label='Confirmar senha'
          ariaName='confirm password'
        />

        <SignUpSubmit
          type='submit'
          data-cy='signUpSubmit'
          disabled={!enableSubmit}
        >
          Cadastrar
        </SignUpSubmit>
      </form>
    </SignUpStyle>
  )
}

export default SignUp
