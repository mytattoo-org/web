import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import useWindowSize from 'hooks/useWindowSize'

import { readFeedThunk } from 'store/posts/extraReducers/readFeed'

import { useEffect } from 'react'
import { useTheme } from 'styled-components'

const usePosts = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { innerWidth, innerHeight } = useWindowSize()
  const { posts } = useAppSelector(({ postsStore }) => postsStore.feed)

  const getResizableProps = () => {
    let scroll = 8
    let otherElements = 0
    const resizableIconSize = 56

    if (innerWidth > 1080) {
      scroll = 16
      otherElements = 300 * 2
    }

    const margin = otherElements + resizableIconSize + scroll

    const minWidth = 300
    const maxWidth = innerWidth - margin
    const idealSize = innerHeight * 0.7
    const initialWidth = idealSize < maxWidth ? idealSize : maxWidth

    const condition = innerWidth > 768

    return { maxWidth, minWidth, initialWidth, condition }
  }

  useEffect(() => {
    dispatch(readFeedThunk())
  }, [dispatch])

  return { theme, posts, resizable: getResizableProps() }
}

export { usePosts }
