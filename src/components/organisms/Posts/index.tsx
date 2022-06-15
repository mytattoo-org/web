import { usePosts } from './logic'
import { PostsStyle } from './styles'

import CreatePost from '../CreatePost'
import Post from '../Post'

const Posts = () => {
  const { formattedPosts } = usePosts()

  return (
    <PostsStyle>
      <a href='#shortcuts' target='_self' tabIndex={0}>
        Voltar para atalhos
      </a>

      <CreatePost forwardedAs='header' aria-label='Criar postagem' />

      <a href='#shortcuts' target='_self' tabIndex={0}>
        Voltar para atalhos
      </a>

      <ul aria-label='Postagens' id='main'>
        {formattedPosts.map(({ headerData, id }) => (
          <li key={id}>
            <Post forwardedAs='section' postHeader={headerData} />
          </li>
        ))}
      </ul>
    </PostsStyle>
  )
}

export default Posts
