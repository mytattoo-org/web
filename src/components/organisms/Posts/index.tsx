import { usePosts } from './logic'
import { PostsStyle } from './styles'

import CreatePost from '../CreatePost'
import Post from '../Post'

const Posts = () => {
  const { posts } = usePosts()

  return (
    <PostsStyle>
      <a href='#shortcuts' target='_self' tabIndex={0}>
        Voltar para atalhos
      </a>

      <header>
        <CreatePost />
      </header>

      <a href='#shortcuts' target='_self' tabIndex={0}>
        Voltar para atalhos
      </a>

      <ul aria-label='Postagens' id='main'>
        {posts?.map(post => (
          <li key={post.id}>
            <Post forwardedAs='section' postData={post} />
          </li>
        ))}
      </ul>
    </PostsStyle>
  )
}

export default Posts
