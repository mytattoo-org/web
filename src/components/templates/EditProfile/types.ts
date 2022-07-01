import { InputHTMLAttributes } from 'react'

interface IEditProfileProps {}

type TOnNewPasswordChange = InputHTMLAttributes<HTMLInputElement>['onBlur']

type TUseEditProfile = () => any

interface IEditProfileForm {
  bio?: string
  email?: string
  avatar?: string
  password?: string
  username?: string
  short_bio?: string
  newPassword?: string
}

export type {
  TUseEditProfile,
  IEditProfileForm,
  IEditProfileProps,
  TOnNewPasswordChange
}
