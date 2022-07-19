import * as Yup from 'yup'

const usernameOrEmail = {
  required: { error: 'Informe um nome de usuário!' }
}

const password = {
  required: { error: 'Informe uma senha!' }
}

const signInSchema = { password, usernameOrEmail }

const signInYupSchema = Yup.object().shape({
  usernameOrEmail: Yup.string().required(usernameOrEmail.required.error),

  password: Yup.string().required(password.required.error)
})

export { signInYupSchema, signInSchema }
