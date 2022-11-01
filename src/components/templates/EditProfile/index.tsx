import { useEditProfile } from './logic'
import { EditProfileStyle, PasswordModal } from './styles'
import type { IEditProfileProps } from './types'

import Avatar from 'components/atoms/Avatar'
import File from 'components/atoms/File'
import AddPhoto from 'components/atoms/Icon/icons/AddPhoto'
import Loading from 'components/atoms/Icon/icons/Loading'
import Sad from 'components/atoms/Icon/icons/Sad'

import Button from 'components/molecules/Button'
import Field from 'components/molecules/Field'
import TextareaField from 'components/molecules/TextareaField'

import { TNextPageWithLayout } from 'typescript/next.types'

const EditProfile: TNextPageWithLayout = (props: IEditProfileProps) => {
  const {
    formik,
    loading,
    modalRef,
    onSaveClick,
    onNewPasswordBlur,
    showConfirmPassword
  } = useEditProfile()

  return (
    <>
      <EditProfileStyle {...props}>
        <section>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label id='changeAvatar'>
                <Avatar size={180} src={formik.values.avatar} />

                <AddPhoto />

                <File id='avatar' name='avatar' formik={formik} />
              </label>

              <Field
                name='username'
                formik={formik}
                placeholder='Nome de usuário'
              />

              <Field
                formik={formik}
                name='short_bio'
                placeholder='Pequena descrição'
              />
            </div>

            <div>
              <Field name='email' placeholder='E-mail' formik={formik} />

              <Field
                type='password'
                formik={formik}
                name='new_password'
                placeholder='Nova senha'
                autoComplete='new-password'
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

              <button type='button' id='sad'>
                <Sad />
                Excluir conta
              </button>
            </div>
          </form>
        </section>

        <footer>
          <button data-cy='save' type='button' onClick={onSaveClick}>
            Salvar alterações
          </button>
        </footer>
      </EditProfileStyle>

      <PasswordModal ref={modalRef} data-cy='passwordModal'>
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

              <Button
                type='submit'
                data-cy='submitEditProfile'
                onClick={formik.handleSubmit}
              >
                Confirmar alterações
              </Button>
            </>
          )}
        </section>
      </PasswordModal>
    </>
  )
}

export default EditProfile
