import { useDisplayOptions } from './logic'
import {
  DisplayHorizontal,
  DisplayOptionsStyle,
  DisplayVertical
} from './styles'

import DisabledFilter from 'components/atoms/Icon/icons/DisabledFilter'
import Filter from 'components/atoms/Icon/icons/Filter'

const DisplayOptions = () => {
  const {
    theme,
    onLiClick,
    backToPosts,
    showFilters,
    onFilterClick,
    verticalColor,
    horizontalColor,
    filterAriaLabel
  } = useDisplayOptions()

  return (
    <DisplayOptionsStyle aria-label='Opções de visualização das postagens'>
      {backToPosts ? (
        <li>
          <DisplayVertical href='/' color={theme.colors.secondary} />
        </li>
      ) : (
        <>
          <li className='feedOrientation' aria-hidden>
            <label
              htmlFor='horizontal'
              aria-label='Visualizar postagens na horizontal'
            >
              <input
                type='radio'
                id='horizontal'
                value='horizontal'
                name='feedOrientation'
                onClick={() => onLiClick('horizontal')}
              />

              <DisplayHorizontal color={horizontalColor} />
            </label>
          </li>

          <li className='feedOrientation' aria-hidden>
            <label
              htmlFor='vertical'
              aria-label='Visualizar postagens na vertical'
            >
              <input
                type='radio'
                id='vertical'
                defaultChecked
                value='vertical'
                name='feedOrientation'
                onClick={() => onLiClick('vertical')}
              />

              <DisplayVertical color={verticalColor} />
            </label>
          </li>

          <li>
            <button
              type='button'
              aria-haspopup='menu'
              onClick={onFilterClick}
              aria-label={filterAriaLabel}
              aria-expanded={showFilters}
            >
              {showFilters ? <DisabledFilter /> : <Filter />}
            </button>
          </li>
        </>
      )}
    </DisplayOptionsStyle>
  )
}

export default DisplayOptions
