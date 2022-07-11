import { TFeedResponse } from '@common/types/posts/useCases/readFeed.types'

import { api } from 'api'
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

const usePosts = () => {
  const theme = useTheme()
  const [posts, setPosts] = useState<TFeedResponse['posts']>([])

  const getPosts = async () => {
    const response: AxiosResponse<TFeedResponse> = await api.get('/feed')

    setPosts(response.data.posts)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return { theme, posts }
}

export { usePosts }
