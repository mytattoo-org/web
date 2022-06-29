import { InputHTMLAttributes } from 'react'

interface IEditProfileProps {}

type TOnAvatarChange = InputHTMLAttributes<HTMLInputElement>['onChange']

type TUseEditProfile = () => any

interface IEditProfileForm {
  bio?: string
  email?: string
  avatar?: string
  password?: string
  username?: string
  short_bio?: string
}

export type {
  TUseEditProfile,
  TOnAvatarChange,
  IEditProfileForm,
  IEditProfileProps
}
