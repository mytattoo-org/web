import type { IFiltersState, TOnFilterClick } from './types'

import { useEffect, useState } from 'react'

const fakeStylesToFilter = [
  { name: 'Trash', id: '1' },
  { name: 'Glitch', id: '2' },
  { name: 'Aquarela', id: '3' },
  { name: 'Colorida', id: '4' },
  { name: 'Oriental', id: '5' },
  { name: 'Realista', id: '6' },
  { name: 'Geométrico', id: '7' },
  { name: 'Minimalismo', id: '8' },
  { name: 'Preto e branco', id: '9' }
]

const useLeftSide = () => {
  const [filters, setFilters] = useState<IFiltersState>()

  const getFilters = () => {
    setFilters(prev => ({
      ...prev,
      unsigned: fakeStylesToFilter
    }))
  }

  const onFilterClick: TOnFilterClick = (filter, action) => {
    switch (action) {
      case 'add':
        setFilters(prev => ({
          ...prev,
          unsigned: prev?.unsigned?.filter(
            prevFilter => prevFilter.id !== filter.id
          ),
          added: prev?.added ? [...prev.added, filter] : [filter]
        }))
        break

      case 'remove':
        setFilters(prev => ({
          ...prev,
          added: prev?.added?.filter(prevFilter => prevFilter.id !== filter.id),
          removed: prev?.removed ? [...prev.removed, filter] : [filter]
        }))
        break

      case 'unsign':
        setFilters(prev => ({
          ...prev,
          removed: prev?.removed?.filter(
            prevFilter => prevFilter.id !== filter.id
          ),
          unsigned: prev?.unsigned ? [...prev.unsigned, filter] : [filter]
        }))
        break

      default:
        throw new Error('Not expected default in switch')
    }
  }

  useEffect(() => {
    getFilters()
  }, [])

  return { filters, onFilterClick }
}

export { useLeftSide }
