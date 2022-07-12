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
    let resizableIcon = 24 * 2
    let otherElements = 0
    let resizableMarginRight = 24 * 2

    if (innerWidth > 1080) {
      resizableIcon = 24 * 2
      otherElements = 300 * 2
      resizableMarginRight = 24 * 2
    }

    const margin = resizableIcon + otherElements + resizableMarginRight

    const minWidth = 300
    const maxWidth = innerWidth - margin
    const idealSize = innerHeight * 0.7
    const initialWidth = idealSize < maxWidth ? idealSize : maxWidth

    return { maxWidth, minWidth, initialWidth }
  }

  useEffect(() => {
    dispatch(readFeedThunk())
  }, [dispatch])

  return { theme, posts, resizable: getResizableProps() }
}

export { usePosts }
