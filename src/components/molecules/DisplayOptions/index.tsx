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
    onLiClick,
    showLeftSide,
    onFilterClick,
    verticalColor,
    horizontalColor,
    filterAriaLabel
  } = useDisplayOptions()

  return (
    <DisplayOptionsStyle aria-label='Opções de visualização das postagens'>
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
        <label htmlFor='vertical' aria-label='Visualizar postagens na vertical'>
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
          id='filterButton'
          aria-haspopup='menu'
          onClick={onFilterClick}
          aria-expanded={showLeftSide}
          aria-label={filterAriaLabel}
        >
          {showLeftSide ? <DisabledFilter /> : <Filter />}
        </button>

        {showLeftSide && (
          <a className='shortcut' href='#filters' target='_self'>
            Pular para filtros
          </a>
        )}
      </li>
    </DisplayOptionsStyle>
  )
}

export default DisplayOptions
