import { useLeftSide } from './logic'
import { LeftSideStyle } from './styles'
import type { ILeftSideProps } from './types'

import Check from 'components/atoms/Icon/icons/Check'
import Close from 'components/atoms/Icon/icons/Close'
import Plus from 'components/atoms/Icon/icons/Plus'
import Search from 'components/atoms/Icon/icons/Search'
import Input from 'components/atoms/Input'

import Button from 'components/molecules/Button'

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

      <ul id='filters'>
        <li id='filtersToAdd'>
          {filters?.unsigned?.length !== undefined &&
            filters.unsigned.length > 0 && (
              <ul>
                {filters?.unsigned?.map(({ id, name }) => (
                  <li key={id}>
                    <Button
                      icon={<Plus />}
                      onClick={() => {
                        onFilterClick({ id, name }, 'add')
                      }}
                    >
                      {name}
                    </Button>
                  </li>
                ))}
              </ul>
            )}
        </li>

        {filters?.removed?.length !== undefined && filters.removed.length > 0 && (
          <li id='removedFilters'>
            <ul>
              {filters?.removed?.map(({ id, name }) => (
                <li key={id}>
                  <Button
                    icon={<Close />}
                    onClick={() => {
                      onFilterClick({ id, name }, 'unsign')
                    }}
                  >
                    {name}
                  </Button>
                </li>
              ))}
            </ul>
          </li>
        )}

        {filters?.added?.length !== undefined && filters.added.length > 0 && (
          <li id='addedFilters'>
            <ul>
              {filters?.added?.map(({ id, name }) => (
                <li key={id}>
                  <Button
                    icon={<Check />}
                    onClick={() => {
                      onFilterClick({ id, name }, 'remove')
                    }}
                  >
                    {name}
                  </Button>
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>
    </LeftSideStyle>
  )
}

export default LeftSide
