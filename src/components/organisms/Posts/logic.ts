import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'

import { readFeedThunk } from 'store/posts/extraReducers/readFeed'

import { useEffect } from 'react'
import { useTheme } from 'styled-components'

const usePosts = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { posts } = useAppSelector(({ postsStore }) => postsStore.feed)

  useEffect(() => {
    dispatch(readFeedThunk())
  }, [dispatch])

  return { theme, posts }
}

export { usePosts }
