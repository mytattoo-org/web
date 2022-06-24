import type { TSelectedDisplay } from './types'

import { FeedContext } from 'components/templates/Feed/logic'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

const useDisplayOptions = () => {
  const theme = useTheme()
  const router = useRouter()
  const { showLeftSide, toggleShowLeftSide } = useContext(FeedContext)
  const [selectedDisplay, setSelectedDisplay] =
    useState<TSelectedDisplay>('vertical')

  const [backToPosts, setBackToPosts] = useState(router.pathname !== '/')

  const filterAriaLabel = showLeftSide
    ? 'Desabilitar filtros'
    : 'Habilitar filtros'

  const onLiClick = (newSelected: TSelectedDisplay) => {
    if (selectedDisplay !== newSelected) setSelectedDisplay(newSelected)
  }

  const onFilterClick = () => {
    showLeftSide ? toggleShowLeftSide() : toggleShowLeftSide()
  }

  useEffect(() => {
    setBackToPosts(router.pathname !== '/')
  }, [router])

  const verticalColor =
    selectedDisplay === 'vertical'
      ? theme.colors.primary
      : theme.colors.secondary

  const horizontalColor =
    selectedDisplay === 'horizontal'
      ? theme.colors.primary
      : theme.colors.secondary

  return {
    onLiClick,
    showLeftSide,
    onFilterClick,
    verticalColor,
    filterAriaLabel,
    horizontalColor,
    theme,
    backToPosts
  }
}

export { useDisplayOptions }
