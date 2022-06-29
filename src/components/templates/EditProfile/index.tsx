/* eslint-disable @next/next/no-img-element */
import { useEditProfile } from './logic'
import { EditProfileStyle } from './styles'
import type { IEditProfileProps } from './types'

import AddPhoto from 'components/atoms/Icon/icons/AddPhoto'
import Sad from 'components/atoms/Icon/icons/Sad'
import { Switch } from 'components/atoms/Switch'

import Field from 'components/molecules/Field'
import TextareaField from 'components/molecules/TextareaField'

import { TNextPageWithLayout } from 'typescript/next.types'

import avatar from '@public/temp/avatar.png'

const EditProfile: TNextPageWithLayout = (props: IEditProfileProps) => {
  const { formik, onAvatarChange } = useEditProfile()

  return (
    <EditProfileStyle onSubmit={formik.handleSubmit} {...props}>
      <header>
        <div id='changeAvatar'>
          <img src={avatar} alt='avatar' />

          <label htmlFor='avatar'>
            <AddPhoto />
          </label>

          <input
            type='file'
            id='avatar'
            name='avatar'
            onChange={onAvatarChange}
            accept='image/png, image/jpeg'
          />
        </div>

        <Field placeholder='Nome de usuário' name='username' formik={formik} />

        <Field
          formik={formik}
          maxLength={32}
          name='short_bio'
          placeholder='Pequena descrição'
        />

        <div id='isArtistSwitch'>
          <Switch id='is_artist' name='is_artist' />

          <label htmlFor='is_artist'>Artista</label>
        </div>
      </header>

      <section>
        <Field name='email' placeholder='E-mail' formik={formik} />

        <Field name='password' placeholder='Nova senha' formik={formik} />

        {/* <Field name='bio' placeholder='Descrição' formik={formik} /> */}

        <TextareaField
          name='bio'
          maxLength={200}
          formik={formik}
          placeholder='Descrição'
        />

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
