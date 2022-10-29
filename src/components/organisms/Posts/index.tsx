import { usePosts } from './logic'
import { PostsStyle } from './styles'

import CreatePost from '../CreatePost'
import Post from '../Post'

import { Resizable } from 'components/atoms/Resizable'

const Posts = () => {
  const {
    user,
    posts,
    resizable,
    showFilters,
    resizableRef,
    iconPlusMargin,
    showSuggestions
  } = usePosts()

  return (
    <PostsStyle
      showFilters={showFilters}
      showSuggestions={showSuggestions}
      iconPlusMargin={iconPlusMargin}
    >
      <Resizable
        ref={resizableRef}
        minWidth={resizable.minWidth}
        maxWidth={resizable.maxWidth}
        condition={resizable.condition}
        initialWidth={resizable.initialWidth}
      >
        <a
          tabIndex={0}
          target='_self'
          href='#shortcuts'
          className='backToShortcuts'
        >
          Voltar para atalhos
        </a>

        <header className='createPost'>{user?.token && <CreatePost />}</header>

        <a
          tabIndex={0}
          target='_self'
          href='#shortcuts'
          className='backToShortcuts'
        >
          Voltar para atalhos
        </a>

        <ul aria-label='Postagens' id='main' className='posts'>
          {posts?.map(post => (
            <li key={post.id}>
              <Post forwardedAs='section' postData={post} />
            </li>
          ))}
        </ul>
      </Resizable>
    </PostsStyle>
  )
}

export default Posts
