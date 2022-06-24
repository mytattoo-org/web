import { EditProfileStyle } from './styles'
import type { IEditProfileProps } from './types'

import Input from 'components/atoms/Input'
import { Switch } from 'components/atoms/Switch'

import Button from 'components/molecules/Button'

import { TNextPageWithLayout } from 'typescript/next.types'

import avatar from '@public/temp/avatar.png'

const EditProfile: TNextPageWithLayout = (props: IEditProfileProps) => {
  return (
    <EditProfileStyle>
      <img src={avatar} />
      <Input placeholder='Nome de usuário' value='InSTinToS' />
      <Input placeholder='Pequena descrição' />

      <Switch />

      <Input placeholder='E-mail' />
      <Input placeholder='Nova senha' />

      <Input placeholder='Descrição' />
      <Button>Excluir conta</Button>
    </EditProfileStyle>
  )
}

export default EditProfile
