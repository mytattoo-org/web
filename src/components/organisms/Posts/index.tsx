import { usePosts } from './logic'
import { PostsStyle } from './styles'

import CreatePost from '../CreatePost'
import Post from '../Post'

import { Resizable } from 'components/atoms/Resizable'

const Posts = () => {
  const { resizable, posts } = usePosts()

  return (
    <Resizable
      minWidth={resizable.minWidth}
      maxWidth={resizable.maxWidth}
      condition={resizable.condition}
      initialWidth={resizable.initialWidth}
    >
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
    </Resizable>
  )
}

export default Posts
