import * as Yup from 'yup'

const editProfileSchema = {
  password: { required: { error: 'Você precisa informar sua senha' } },
  confirmNewPassword: { match: { error: 'As senhas são diferentes!' } },
  username: {
    min: { value: 3, error: 'Nome de usuário muito curto!' },
    max: { value: 20, error: 'Nome de usuário muito longo!' },
    matches: {
      value: /^([A-z0-9])+$/,
      error: 'Nome de usuário deve conter apenas números ou letras!'
    }
  },
  short_bio: {
    max: {
      value: 35,
      error: 'Descrição pequena deve conter até 35 caracteres!'
    },
    matches: {
      value: /^.*$/,
      error: 'Descrição deve conter apenas números ou letras!'
    }
  },
  bio: {
    max: {
      value: 243,
      error: 'Descrição deve conter até 243 caracteres!'
    },
    matches: {
      value: /^.*$/,
      error: 'Descrição deve conter apenas números ou letras!'
    }
  },
  email: {
    email: { error: 'Informe um e-mail valido!' },
    matches: {
      value: /^(\w\.?)+@(\w\.?)+\.(\w\.?)+$/,
      error: 'Informe um e-mail valido!'
    }
  },
  newPassword: {
    max: { value: 30, error: 'Senha muito longa!' },
    min: { value: 8, error: `Sua senha deve conter mais que 8 caracteres!` },
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
}

const {
  bio,
  email,
  password,
  username,
  short_bio,
  newPassword,
  confirmNewPassword
} = editProfileSchema

const editProfileYupSchema = Yup.object().shape({
  avatar: Yup.string().nullable(),

  artist: Yup.bool(),

  short_bio: Yup.string()
    .max(short_bio.max.value, short_bio.max.error)
    .matches(short_bio.matches.value, short_bio.matches.error)
    .nullable(),

  bio: Yup.string()
    .max(bio.max.value, bio.max.error)
    .matches(bio.matches.value, bio.matches.error)
    .nullable(),

  username: Yup.string()
    .min(username.min.value, username.min.error)
    .max(username.max.value, username.max.error)
    .matches(username.matches.value, username.matches.error)
    .nullable(),

  email: Yup.string()
    .email(email.email.error)
    .matches(email.matches.value, email.matches.error)
    .nullable(),

  password: Yup.string().required(password.required.error),

  newPassword: Yup.string()
    .min(newPassword.min.value, newPassword.min.error)
    .max(newPassword.max.value, newPassword.max.error)
    .matches(newPassword.matches[0].value, newPassword.matches[0].error)
    .matches(newPassword.matches[1].value, newPassword.matches[1].error)
    .matches(newPassword.matches[2].value, newPassword.matches[2].error)
    .matches(newPassword.matches[3].value, newPassword.matches[3].error)
    .nullable(),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], confirmNewPassword.match.error)
    .nullable()
})

export { editProfileYupSchema, editProfileSchema }
