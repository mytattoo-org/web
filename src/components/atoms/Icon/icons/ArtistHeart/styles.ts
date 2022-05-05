import type { IArtistHeartProps } from './types'

import Icon from '../../'

import styled from 'styled-components'

const ArtistHeartStyle = styled(Icon)<IArtistHeartProps>`
  path + path {
    fill: ${({ theme, heartColor }) =>
      heartColor ? heartColor : theme.colors.red};
  }
`

export { ArtistHeartStyle }
