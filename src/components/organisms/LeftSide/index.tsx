import { useLeftSide } from './logic'
import { LeftSideStyle } from './styles'
import type { ILeftSideProps } from './types'

import DropArrow from 'components/atoms/DropArrow'
import Arrow from 'components/atoms/Icon/icons/Arrow'
import Check from 'components/atoms/Icon/icons/Check'
import Close from 'components/atoms/Icon/icons/Close'
import Plus from 'components/atoms/Icon/icons/Plus'
import Search from 'components/atoms/Icon/icons/Search'
import Input from 'components/atoms/Input'

import Button from 'components/molecules/Button'

import { motion } from 'framer-motion'
import { LayoutGroup } from 'framer-motion'

const LeftSide = (props: ILeftSideProps) => {
  const { filters, onFilterClick } = useLeftSide()

  return (
    <LeftSideStyle
      id='leftSide'
      role='alert'
      aria-atomic='true'
      aria-live='assertive'
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
            {filters?.unsigned?.length !== undefined &&
              filters.unsigned.length > 0 && (
                <ul>
                  {filters?.unsigned?.map(({ id, name }) => (
                    <motion.li layout key={id}>
                      <Button
                        icon={<Plus />}
                        onClick={() => {
                          onFilterClick({ id, name }, 'add')
                        }}
                      >
                        {name}
                      </Button>
                    </motion.li>
                  ))}
                </ul>
              )}
          </li>

          {filters?.removed?.length !== undefined &&
            filters.removed.length > 0 && (
              <li id='removedFilters'>
                <ul>
                  {filters?.removed?.map(({ id, name }) => (
                    <motion.li layout key={id}>
                      <Button
                        icon={<Close />}
                        onClick={() => {
                          onFilterClick({ id, name }, 'unsign')
                        }}
                      >
                        {name}
                      </Button>
                    </motion.li>
                  ))}
                </ul>
              </li>
            )}

          {filters?.added?.length !== undefined && filters.added.length > 0 && (
            <li id='addedFilters'>
              <ul>
                {filters?.added?.map(({ id, name }) => (
                  <motion.li layout key={id}>
                    <Button
                      icon={<Check />}
                      onClick={() => {
                        onFilterClick({ id, name }, 'remove')
                      }}
                    >
                      {name}
                    </Button>
                  </motion.li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      </LayoutGroup>
    </LeftSideStyle>
  )
}

export default LeftSide
