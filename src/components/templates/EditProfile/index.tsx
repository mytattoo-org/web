import { useEditProfile } from './logic'
import { EditProfileStyle } from './styles'
import type { IEditProfileProps } from './types'

import AddPhoto from 'components/atoms/Icon/icons/AddPhoto'
import Sad from 'components/atoms/Icon/icons/Sad'
import Input from 'components/atoms/Input'
import { Switch } from 'components/atoms/Switch'

import { TNextPageWithLayout } from 'typescript/next.types'

import avatar from '@public/temp/avatar.png'

const EditProfile: TNextPageWithLayout = (props: IEditProfileProps) => {
  const { user } = useEditProfile()

  return (
    <EditProfileStyle>
      <header>
        <div id='changeAvatar'>
          <img src={avatar} />

          <label htmlFor='avatar'>
            <AddPhoto />
          </label>

          <input
            type='file'
            id='avatar'
            name='avatar'
            accept='image/png, image/jpeg'
          />
        </div>

        <Input
          name='bio'
          defaultValue={user?.username}
          placeholder='Nome de usuário'
        />

        <Input
          name='short_bio'
          placeholder='Pequena descrição'
          defaultValue={user?.short_bio}
        />

        <div id='isArtistSwitch'>
          <Switch
            id='isArtist'
            name='isArtist'
            defaultChecked={user?.isArtist}
          />

          <label htmlFor='isArtist'>Artista</label>
        </div>
      </header>

      <section>
        <Input placeholder='E-mail' defaultValue={user?.email} />

        <Input placeholder='Nova senha' />

        <Input placeholder='Descrição' defaultValue={user?.bio} />

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
