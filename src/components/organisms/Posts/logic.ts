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
  const resizableRef = useRef<IForwardedResizable>(null)
  const { showFilters } = useContext(NavbarContext)
  const { innerWidth, innerHeight } = useWindowSize()
  const { posts } = useAppSelector(({ postsStore }) => postsStore.feed)

  const iconPlusMargin = 24 + 16

  const getResizableProps = () => {
    let scroll = 8
    let otherElements = 0

    const xMargin = 16 * 2
    const totalMarginPlusIcon = xMargin + iconPlusMargin

    if (innerWidth > 1080) {
      scroll = 16
      otherElements = 300 * (showFilters ? 2 : 1)
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
    resizableRef.current?.resetSize()
  }, [showFilters])

  useEffect(() => {
    dispatch(readFeedThunk())
  }, [dispatch])

  return {
    theme,
    posts,
    showFilters,
    resizableRef,
    iconPlusMargin,
    resizable: getResizableProps()
  }
}

export { usePosts }
