import { useEditProfile } from './logic'
import { EditProfileStyle, PasswordModal } from './styles'
import type { IEditProfileProps } from './types'

import Avatar from 'components/atoms/Avatar'
import File from 'components/atoms/File'
import AddPhoto from 'components/atoms/Icon/icons/AddPhoto'
import Loading from 'components/atoms/Icon/icons/Loading'
import Sad from 'components/atoms/Icon/icons/Sad'
import { Switch } from 'components/atoms/Switch'

import Button from 'components/molecules/Button'
import Feedback from 'components/molecules/Feedback'
import Field from 'components/molecules/Field'
import TextareaField from 'components/molecules/TextareaField'

import { TNextPageWithLayout } from 'typescript/next.types'

const EditProfile: TNextPageWithLayout = (props: IEditProfileProps) => {
  const {
    formik,
    loading,
    modalRef,
    feedbackRef,
    onSaveClick,
    onNewPasswordBlur,
    showConfirmPassword
  } = useEditProfile()

  return (
    <>
      <EditProfileStyle onSubmit={formik.handleSubmit} {...props}>
        <header>
          <label>
            <Avatar size={180} />

            <AddPhoto />

            <File id='avatar' name='avatar' formik={formik} />
          </label>

          <Field
            placeholder='Nome de usuário'
            name='username'
            formik={formik}
          />

          <Field
            formik={formik}
            name='short_bio'
            placeholder='Pequena descrição'
          />

          <Switch id='artist' name='artist' label='Artista' formik={formik} />
        </header>

        <section>
          <Field name='email' placeholder='E-mail' formik={formik} />

          <Field
            type='password'
            formik={formik}
            name='newPassword'
            placeholder='Nova senha'
            onBlur={onNewPasswordBlur}
          />

          {showConfirmPassword && (
            <Field
              formik={formik}
              type='password'
              name='confirmNewPassword'
              placeholder='Confirmar nova senha'
            />
          )}

          <TextareaField
            name='bio'
            maxLength={243}
            formik={formik}
            placeholder='Descrição'
          />

          <button type='button'>
            <Sad />
            Excluir conta
          </button>
        </section>

        <footer>
          <button type='button' onClick={onSaveClick}>
            Salvar alterações
          </button>
        </footer>
      </EditProfileStyle>

      <PasswordModal ref={modalRef}>
        <section>
          {loading ? (
            <Loading />
          ) : (
            <>
              <Field
                formik={formik}
                name='password'
                type='password'
                placeholder='Senha atual'
              />

              <Button type='submit' onClick={formik.handleSubmit}>
                Confirmar alterações
              </Button>
            </>
          )}
        </section>
      </PasswordModal>

      <Feedback ref={feedbackRef} />
    </>
  )
}

export default EditProfile
