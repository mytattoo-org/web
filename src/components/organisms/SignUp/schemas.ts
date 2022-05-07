import * as Yup from 'yup'

const username = {
  required: { error: 'Informe um nome de usuário!' },
  min: { value: 3, error: 'Nome de usuário muito curto!' },
  max: { value: 20, error: 'Nome de usuário muito longo!' },
  matches: {
    value: /^([A-z0-9])+$/,
    error: 'Nome de usuário deve conter apenas números ou letras!'
  }
}

const email = {
  required: { error: 'Informe um e-mail!' },
  email: { error: 'Informe um e-mail valido!' },
  matches: {
    value: /^(\w\.?)+@(\w\.?)+\.(\w\.?)+$/,
    error: 'Informe um e-mail valido!'
  }
}

const password = {
  required: { error: 'Informe uma senha!' },
  min: { value: 8, error: `Sua senha deve conter mais que 8 caracteres!` },
  max: { value: 30, error: 'Nome de usuário muito longo!' },
  matches: [
    {
      value: /^(?=.*[@$!%*?&])/,
      error: 'Sua senha deve conter um caractere especial!'
    },
    {
      value: /^(?=.*[A-Z])/,
      error: 'Sua senha deve conter uma letra maiúscula!'
    },
    {
      value: /^(?=.*[a-z])/,
      error: 'Sua senha deve conter uma letra minúscula!'
    },
    {
      value: /^(?=.*\d)/,
      error: 'Sua senha deve conter um número!'
    }
  ]
}

const confirmPassword = {
  match: { error: 'As senhas são diferentes!' },
  required: { error: 'Você precisa confirmar sua senha!' }
}

const signUpSchema = { username, password, email, confirmPassword }

const signUpYupSchema = Yup.object().shape({
  username: Yup.string()
    .min(username.min.value, username.min.error)
    .max(username.max.value, username.max.error)
    .matches(username.matches.value, username.matches.error)
    .required(username.required.error),

  email: Yup.string()
    .email(email.email.error)
    .matches(email.matches.value, email.matches.error)
    .required(email.required.error),

  password: Yup.string()
    .min(password.min.value, password.min.error)
    .max(password.max.value, password.max.error)
    .matches(password.matches[0].value, password.matches[0].error)
    .matches(password.matches[1].value, password.matches[1].error)
    .matches(password.matches[2].value, password.matches[2].error)
    .matches(password.matches[3].value, password.matches[3].error)
    .required(password.required.error),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], confirmPassword.match.error)
    .required(confirmPassword.required.error)
})

export { signUpYupSchema, signUpSchema }
