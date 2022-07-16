import type { IForwardedResizable } from 'components/atoms/Resizable/types'

import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import useWindowSize from 'hooks/useWindowSize'

import { readFeedThunk } from 'store/posts/extraReducers/readFeed'

import { NavbarContext } from 'components/layouts/NavbarLayout/logic'
import { useContext, useEffect, useRef } from 'react'
import { useTheme } from 'styled-components'

const usePosts = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { innerWidth, innerHeight } = useWindowSize()
  const resizableRef = useRef<IForwardedResizable>(null)
  const { showFilters, showSuggestions } = useContext(NavbarContext)
  const { posts } = useAppSelector(({ postsStore }) => postsStore.feed)

  const iconPlusMargin = 24 + 24

  const getResizableProps = () => {
    let scroll = 8
    let otherElements = 0

    const xMargin = 24 * 2
    const totalMarginPlusIcon = xMargin + iconPlusMargin

    if (innerWidth > 1080) {
      scroll = 16

      if (showFilters && showSuggestions) otherElements = 300 * 2
      else if (showFilters || showSuggestions) otherElements = 300 * 1
    }

    const margin = otherElements + totalMarginPlusIcon + scroll

    const minWidth = 300
    const maxWidth = innerWidth - margin
    const idealSize = innerHeight * 0.7
    const initialWidth = idealSize < maxWidth ? idealSize : maxWidth

    const condition = innerWidth > 768

    return { maxWidth, minWidth, initialWidth, condition }
  }

  useEffect(() => {
    resizableRef.current?.resetSize && resizableRef.current?.resetSize()
  }, [showFilters, showSuggestions])

  useEffect(() => {
    dispatch(readFeedThunk())
  }, [dispatch])

  return {
    theme,
    posts,
    showFilters,
    resizableRef,
    iconPlusMargin,
    showSuggestions,
    resizable: getResizableProps()
  }
}

export { usePosts }
