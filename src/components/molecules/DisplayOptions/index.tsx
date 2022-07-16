import { useDisplayOptions } from './logic'
import { DisplayOptionsStyle } from './styles'

import DisabledFilter from 'components/atoms/Icon/icons/DisabledFilter'
import DisplayHorizontal from 'components/atoms/Icon/icons/DisplayHorizontal'
import DisplayVertical from 'components/atoms/Icon/icons/DisplayVertical'
import Filter from 'components/atoms/Icon/icons/Filter'
import Suggestion from 'components/atoms/Icon/icons/Suggestion'

const DisplayOptions = () => {
  const {
    theme,
    colors,
    onLiClick,
    backToPosts,
    showFilters,
    onFilterClick,
    filterAriaLabel,
    onSuggestionClick
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

              <DisplayHorizontal color={colors.horizontal} />
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

              <DisplayVertical color={colors.vertical} />
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
              {showFilters ? (
                <DisabledFilter color={colors.filter} />
              ) : (
                <Filter color={colors.filter} />
              )}
            </button>
          </li>

          <li>
            <button
              type='button'
              aria-haspopup='menu'
              onClick={onSuggestionClick}
              aria-expanded={showFilters}
              aria-label={filterAriaLabel}
            >
              <Suggestion color={colors.suggestion} />
            </button>
          </li>
        </>
      )}
    </DisplayOptionsStyle>
  )
}

export default DisplayOptions
