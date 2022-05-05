import type { TSelectedDisplay } from './types'

import { FeedContext } from 'components/templates/Feed/logic'

import { useState } from 'react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

const useDisplayOptions = () => {
  const theme = useTheme()
  const { showLeftSide, toggleShowLeftSide } = useContext(FeedContext)
  const [selectedDisplay, setSelectedDisplay] =
    useState<TSelectedDisplay>('vertical')

  const filterAriaLabel = showLeftSide
    ? 'Desabilitar filtros'
    : 'Habilitar filtros'

  const onLiClick = (newSelected: TSelectedDisplay) => {
    if (selectedDisplay !== newSelected) setSelectedDisplay(newSelected)
  }

  const onFilterClick = () => {
    showLeftSide ? toggleShowLeftSide() : toggleShowLeftSide()
  }

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
    horizontalColor
  }
}

export { useDisplayOptions }
