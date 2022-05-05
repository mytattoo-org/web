import type { IFormattedData, TPostsResponse } from './types'

import { useTheme } from 'styled-components'

const fakePosts: TPostsResponse = [
  {
    id: '2',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolor, eos possimus sint, quam aliquam veniam obcaecati, eius libero numquam perspiciatis dolorem! Sed, adipisci odio minima odit dolorum libero vero.',
    author: { name: 'Vitor Daniel', isArtist: true, avatar: '/avatar2.jpg' }
  },
  {
    id: '1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolor, eos possimus sint, quam aliquam veniam obcaecati, eius libero numquam perspiciatis dolorem! Sed, adipisci odio minima odit dolorum libero vero.',
    author: { name: 'Miguel Andrade', isArtist: false, avatar: '/avatar.png' }
  }
]

const usePosts = () => {
  const theme = useTheme()

  const formattedPosts: IFormattedData[] = fakePosts.map(
    ({ id, author, description }) => ({
      id: id,
      headerData: {
        description,
        avatar: author.avatar,
        isArtist: author.isArtist,
        name: author.name
      }
    })
  )

  return { formattedPosts, theme }
}

export { usePosts }
