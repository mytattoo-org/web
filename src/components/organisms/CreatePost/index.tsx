import { AddButton, CreatePostStyle, ShareButton } from './styles'
import type { ICreatePostProps } from './types'

import AddPhoto from 'components/atoms/Icon/icons/AddPhoto'
import Plus from 'components/atoms/Icon/icons/Plus'
import TextArea from 'components/atoms/TextArea'

const CreatePost = ({ forwardedAs, ...props }: ICreatePostProps) => (
  <CreatePostStyle as={forwardedAs} {...props}>
    <TextArea
      id='createPost'
      name='createPost'
      placeholder='Faça uma postagem'
    />

    <footer>
      <ul>
        <li>
          <AddButton icon={<Plus />}>Adicionar vertentes</AddButton>
        </li>

        <li>
          <AddButton icon={<AddPhoto />}>Adicionar imagem</AddButton>
        </li>

        <li>
          <ShareButton type='submit'>Publicar</ShareButton>
        </li>
      </ul>
    </footer>
  </CreatePostStyle>
)

export default CreatePost
