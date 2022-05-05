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
    horizontalColor,
    verticalColor,
    showLeftSide,
    toggleShowLeftSide
  } = useDisplayOptions()

  return (
    <DisplayOptionsStyle aria-label='Opções de visualização das postagens'>
      <li className='feedOrientation'>
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

      <li className='feedOrientation'>
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
          aria-label={
            showLeftSide ? 'Desabilitar filtros' : 'Habilitar filtros'
          }
          onClick={() => {
            showLeftSide ? toggleShowLeftSide() : toggleShowLeftSide()
          }}
        >
          {showLeftSide ? (
            <DisabledFilter aria-live='polite' />
          ) : (
            <Filter aria-live='polite' />
          )}
        </button>
      </li>
    </DisplayOptionsStyle>
  )
}

export default DisplayOptions
