import { EditProfileStyle } from './styles'
import type { IEditProfileProps } from './types'

import Sad from 'components/atoms/Icon/icons/Sad'
import Input from 'components/atoms/Input'
import { Switch } from 'components/atoms/Switch'

import Button from 'components/molecules/Button'

import { TNextPageWithLayout } from 'typescript/next.types'

import avatar from '@public/temp/avatar.png'

const EditProfile: TNextPageWithLayout = (props: IEditProfileProps) => {
  return (
    <EditProfileStyle>
      <header>
        <img src={avatar} />

        <Input placeholder='Nome de usuário' value='InSTinToS' />

        <Input placeholder='Pequena descrição' />

        <div id='isArtistSwitch'>
          <Switch id='isArtist' name='isArtist' />

          <label htmlFor='isArtist'>Artista</label>
        </div>
      </header>

      <section>
        <Input placeholder='E-mail' />

        <Input placeholder='Nova senha' />

        <Input placeholder='Descrição' />

        <button type='button'>
          <Sad />
          Excluir conta
        </button>
      </section>

      <footer>
        <button type='submit'>Salvar alterações</button>
      </footer>
    </EditProfileStyle>
  )
}

export default EditProfile
