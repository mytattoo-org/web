import { StylesStyle } from './styles'
import type { IStylesProps } from './types'

import Button from '../Button'

import Presence from 'components/atoms/Presence'

import {
  liVariants,
  ulAnimationProps
} from 'components/organisms/Comments/animations'

import { motion } from 'framer-motion'

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

const Styles = ({ showingStyles = true, ...props }: IStylesProps) => (
  <Presence condition={showingStyles}>
    <StylesStyle
      aria-label='Estilos da postagem'
      {...props}
      {...ulAnimationProps}
    >
      {fakeTattooStyles.map(tattooStyle => (
        <motion.li key={tattooStyle} variants={liVariants}>
          <Button>{tattooStyle}</Button>
        </motion.li>
      ))}
    </StylesStyle>
  </Presence>
)

export default Styles
