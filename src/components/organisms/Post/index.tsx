import { PostStyle } from './styles'
import type { IPostProps } from './types'

import PostHeader from 'components/molecules/PostHeader'

import PostFooter from 'components/organisms/PostFooter'

import { IFeed } from '@common/types/posts/models/feedModel.types'

import Image from 'next/image'
import { createContext } from 'react'

export const PostContext = createContext({} as IFeed)

const Post = ({ postData, forwardedAs, ...props }: IPostProps) => {
  return (
    <PostContext.Provider value={postData}>
      <PostStyle as={forwardedAs} {...props}>
        <article>
          <PostHeader
            name={postData.author.username}
            avatar={postData.author.avatar}
            description={postData.description}
            isArtist={!!postData.author.artist}
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
    </PostContext.Provider>
  )
}

export default Post
