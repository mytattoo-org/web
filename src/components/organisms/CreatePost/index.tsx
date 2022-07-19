import { useCreatePost } from './logic'
import { AddLabel, CreatePostStyle, ShareButton } from './styles'
import type { ICreatePostProps } from './types'

import File from 'components/atoms/File'
import AddPhoto from 'components/atoms/Icon/icons/AddPhoto'

// import Plus from 'components/atoms/Icon/icons/Plus'
import TextareaField from 'components/molecules/TextareaField'

import Image from 'next/image'

const CreatePost = ({ ...props }: ICreatePostProps) => {
  const { formik } = useCreatePost()

  return (
    <CreatePostStyle
      {...props}
      aria-label='Criar postagem'
      onSubmit={formik.handleSubmit}
    >
      <TextareaField
        formik={formik}
        id='createPost'
        name='description'
        forwardedAs='header'
        placeholder='Faça uma postagem'
      />

      {formik.values.image && (
        <div id='image'>
          <Image
            tabIndex={0}
            width='100%'
            height='100%'
            priority={true}
            objectFit='cover'
            layout='responsive'
            src={formik.values.image}
            alt='Imagem para ser postada'
          />
        </div>
      )}

      <footer>
        <ul>
          <li>
            <AddLabel>
              <File formik={formik} name='image' />

              <AddPhoto />

              <span>Adicionar imagem</span>
            </AddLabel>
          </li>

          <li>
            <ShareButton type='submit'>Publicar</ShareButton>
          </li>
        </ul>
      </footer>
    </CreatePostStyle>
  )
}
export default CreatePost
