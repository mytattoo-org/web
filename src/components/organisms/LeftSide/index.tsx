import { useLeftSide } from './logic'
import { LeftSideStyle } from './styles'
import type { ILeftSideProps } from './types'

import FilterList from '../../molecules/FilterList'

import Close from 'components/atoms/Icon/icons/Close'
import Plus from 'components/atoms/Icon/icons/Plus'
import Search from 'components/atoms/Icon/icons/Search'
import Input from 'components/atoms/Input'

import { LayoutGroup } from 'framer-motion'

const LeftSide = (props: ILeftSideProps) => {
  const { filters, onFilterClick } = useLeftSide()

  console.log(filters)

  return (
    <LeftSideStyle
      id='filters'
      aria-label='Editar filtros desejados das postagens'
      {...props}
    >
      <header>
        <form>
          <label htmlFor='search'>
            <Search />

            <Input
              id='search'
              name='filter'
              placeholder='Procure por filtros'
            />
          </label>
        </form>
      </header>

      <LayoutGroup>
        <ul id='filters'>
          <li id='filtersToAdd'>
            <FilterList
              icon={<Plus />}
              filters={filters?.unsigned}
              onClick={filterData => {
                onFilterClick(filterData, 'add')
              }}
            />
          </li>

          <li id='removedFilters'>
            <FilterList
              icon={<Close />}
              filters={filters?.removed}
              onClick={filterData => onFilterClick(filterData, 'unsign')}
            />
          </li>

          <li id='addedFilters'>
            <FilterList
              icon={<Close />}
              filters={filters?.added}
              onClick={filterData => onFilterClick(filterData, 'remove')}
            />
          </li>
        </ul>
      </LayoutGroup>
    </LeftSideStyle>
  )
}

export default LeftSide
