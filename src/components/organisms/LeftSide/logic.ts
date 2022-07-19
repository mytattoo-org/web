import type { IFiltersState, TOnFilterClick } from './types'

import { useEffect, useState } from 'react'

const fakeStylesToFilter = [
  { name: 'Geométrico', id: '10' },
  { name: 'Trash', id: '2' },
  { name: 'Minimalista', id: '14' },
  { name: 'Maori', id: '3' },
  { name: 'Old School', id: '11' },
  { name: 'Tribal', id: '4' },
  { name: 'Pontilhismo', id: '13' },
  { name: 'Glitch', id: '5' },
  { name: 'Aquarela', id: '6' },
  { name: 'Single Line', id: '15' },
  { name: 'Colorida', id: '7' },
  { name: 'Black Work', id: '12' },
  { name: 'Oriental', id: '8' },
  { name: 'Realista', id: '9' },
  { name: 'Preto e branco', id: '16' }
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
