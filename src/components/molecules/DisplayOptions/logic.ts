import type { TSelectedDisplay } from './types'

import { NavbarContext } from 'components/layouts/NavbarLayout/logic'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

const useDisplayOptions = () => {
  const theme = useTheme()
  const router = useRouter()
  const {
    showFilters,
    showSuggestions,
    toggleShowFilters,
    toggleShowSuggestions
  } = useContext(NavbarContext)
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

  const onSuggestionClick = () => {
    toggleShowSuggestions()
  }

  const getColor = (isActive: boolean) =>
    isActive ? theme.colors.primary : theme.colors.secondary

  useEffect(() => {
    setBackToPosts(router.pathname !== '/')
  }, [router])

  const colors = {
    filter: getColor(showFilters),
    suggestion: getColor(showSuggestions),
    vertical: getColor(selectedDisplay === 'vertical'),
    horizontal: getColor(selectedDisplay === 'horizontal')
  }

  return {
    theme,
    colors,
    onLiClick,
    backToPosts,
    showFilters,
    onFilterClick,
    filterAriaLabel,
    onSuggestionClick
  }
}

export { useDisplayOptions }
