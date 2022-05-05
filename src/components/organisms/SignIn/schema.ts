import * as Yup from 'yup'

const signInYupSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required(
    'Informe um nome de usuário ou e-mail!'
  ),

  password: Yup.string()
    .matches(/^(?=.*[@$!%*?&])/, 'Senha inválida!')
    .matches(/^(?=.*[A-Z])/, 'Senha inválida!')
    .matches(/^(?=.*[a-z])/, 'Senha inválida!')
    .matches(/^(?=.*\d)/, 'Senha inválida!')
    .min(8, 'Senha inválida!')
    .required('Informe uma senha!')
})

export { signInYupSchema }
