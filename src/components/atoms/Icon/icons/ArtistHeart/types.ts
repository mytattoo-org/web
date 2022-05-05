import { IIconProps } from '../../types'
import type { IIconStyleProps } from '../../types'

interface IArtistHeartStyleProps extends IIconStyleProps {
  heartColor?: string
}

interface IArtistHeartProps extends IArtistHeartStyleProps, IIconProps {}

export type { IArtistHeartStyleProps, IArtistHeartProps }
