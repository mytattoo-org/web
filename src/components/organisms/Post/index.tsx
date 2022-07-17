import { PostStyle } from './styles'
import type { IPostProps } from './types'

import PostHeader from 'components/molecules/PostHeader'

import PostFooter from 'components/organisms/PostFooter'

import Image from 'next/image'

const Post = ({ postData, forwardedAs, ...props }: IPostProps) => (
  <PostStyle as={forwardedAs} {...props}>
    <article>
      <PostHeader
        name={postData.author.username}
        avatar={postData.author.avatar}
        isArtist={!!postData.author.artist}
        description={postData.description}
      />

      <Image
        tabIndex={0}
        width='100%'
        height='100%'
        priority={true}
        objectFit='cover'
        layout='responsive'
        src={postData.image}
        className='postImage'
        alt='Imagem da postagem'
      />
    </article>

    <PostFooter />
  </PostStyle>
)

export default Post
