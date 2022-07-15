import type { TSelectedDisplay } from './types'

import { NavbarContext } from 'components/layouts/NavbarLayout/logic'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

const useDisplayOptions = () => {
  const theme = useTheme()
  const router = useRouter()
  const { showFilters, toggleShowFilters } = useContext(NavbarContext)
  const [backToPosts, setBackToPosts] = useState(router.pathname !== '/')
  const [selectedDisplay, setSelectedDisplay] =
    useState<TSelectedDisplay>('vertical')

  const filterAriaLabel = showFilters
    ? 'Desabilitar filtros'
    : 'Habilitar filtros'

  const onLiClick = (newSelected: TSelectedDisplay) => {
    if (selectedDisplay !== newSelected) setSelectedDisplay(newSelected)
  }

  const onFilterClick = () => {
    toggleShowFilters()
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
    theme,
    onLiClick,
    backToPosts,
    showFilters,
    onFilterClick,
    verticalColor,
    filterAriaLabel,
    horizontalColor
  }
}

export { useDisplayOptions }
