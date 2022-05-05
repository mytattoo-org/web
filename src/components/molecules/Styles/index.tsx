import { StylesStyle } from './styles'
import type { IStylesProps } from './types'

import Button from '../Button'

const fakeTattooStyles = [
  'Maori',
  'Old School',
  'Tribal',
  'Trash',
  'Old School',
  'Aquarela',
  'Maori',
  'Old School',
  'Tribal',
  'Trash',
  'Old School',
  'Tribal',
  'Trash',
  'Aquarela',
  'Old School',
  'Maori',
  'Trash',
  'Old School',
  'Tribal',
  'Trash',
  'Aquarela',
  'Maori',
  'Old School',
  'Tribal',
  'Old School',
  'Tribal',
  'Trash',
  'Tribal',
  'Trash',
  'Aquarela',
  'Old School',
  'Maori',
  'Old School',
  'Tribal',
  'Trash',
  'Aquarela'
]

const Styles = ({ showingStyles = true, ...props }: IStylesProps) =>
  showingStyles ? (
    <StylesStyle aria-label='Estilos da postagem' {...props}>
      {fakeTattooStyles.map(tattooStyle => (
        <li key={tattooStyle}>
          <Button>{tattooStyle}</Button>
        </li>
      ))}
    </StylesStyle>
  ) : (
    <></>
  )

export default Styles
