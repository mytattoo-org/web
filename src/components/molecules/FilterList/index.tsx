import { FilterListStyle } from './styles'
import type { IFilterListProps } from './types'

import Button from 'components/molecules/Button'

import { motion } from 'framer-motion'

const FilterList = ({ filters, onClick, icon }: IFilterListProps) => {
  const showFilters = filters?.length !== undefined && filters.length > 0

  return (
    <FilterListStyle>
      <ul>
        {showFilters &&
          filters.map(({ id, name }) => (
            <motion.li layout key={id}>
              <Button icon={icon} onClick={() => onClick({ id, name })}>
                {name}
              </Button>
            </motion.li>
          ))}
      </ul>
    </FilterListStyle>
  )
}

export default FilterList
