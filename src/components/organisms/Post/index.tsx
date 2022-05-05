import { PostStyle } from './styles'
import type { IPostProps } from './types'

import PostHeader from 'components/molecules/PostHeader'

import PostFooter from 'components/organisms/PostFooter'

import Image from 'next/image'

const Post = ({ postHeader, forwardedAs, ...props }: IPostProps) => (
  <PostStyle as={forwardedAs} {...props}>
    <article>
      <PostHeader
        name={postHeader.name}
        avatar={postHeader.avatar}
        isArtist={postHeader.isArtist}
        description={postHeader.description}
      />

      <Image
        tabIndex={0}
        width='100%'
        height='100%'
        priority={true}
        src='/tattoo.png'
        layout='responsive'
        objectFit='contain'
        alt='Tatuagem no antebraço com a representação do deus Anúbis'
      />
    </article>

    <PostFooter />
  </PostStyle>
)

export default Post
