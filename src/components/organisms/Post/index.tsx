import { PostContext, usePost } from './logic'
import { PostStyle } from './styles'
import { IPostProps } from './types'

import PostHeader from 'components/molecules/PostHeader'

import PostFooter from 'components/organisms/PostFooter'

import Image from 'next/image'

const Post = ({ postData, forwardedAs, ...props }: IPostProps) => {
  const { postContextValue } = usePost({ postData })

  return (
    <PostContext.Provider value={postContextValue}>
      <PostStyle as={forwardedAs} {...props}>
        <article>
          <PostHeader
            name={postData.author.username}
            avatar={postData.author.avatar}
            description={postData.description}
          />

          <Image
            tabIndex={0}
            width='100%'
            height='100%'
            priority={true}
            draggable='false'
            objectFit='cover'
            layout='responsive'
            className='postImage'
            alt='Imagem da postagem'
            style={{ userSelect: 'none' }}
            src={postData.image.includes('/') ? postData.image : ''}
          />
        </article>

        <PostFooter />
      </PostStyle>
    </PostContext.Provider>
  )
}

export default Post
