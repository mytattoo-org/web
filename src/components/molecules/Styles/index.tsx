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
  'Trash',
  'Maori',
  'Tribal',
  'Glitch',
  'Aquarela',
  'Colorida',
  'Oriental',
  'Realista',
  'Geométrico',
  'Old School',
  'Black Work',
  'Pontilhismo',
  'Minimalista',
  'Single Line',
  'Preto e branco'
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
