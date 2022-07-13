import Icon from '../..'
import type { IIconProps } from '../../types'

import composeClassName from 'utils/composeClassName'

const Logo = ({ className, ...props }: IIconProps) => (
  <Icon
    viewBox='0 0 385 392'
    className={composeClassName('Logo', className)}
    {...props}
  >
    <path d='M40.8188 80C-39.2495 206.775 146.076 329.628 192.782 391.805C155.417 226.733 70.3188 231 85.3188 132L40.8188 80Z' />

    <path d='M217.486 142.277L280.773 305.982L41.0082 26.0003C237.659 151.36 158.366 110.176 320.008 19.0001L217.486 142.277Z' />

    <path d='M342.225 344.214C373.837 292.488 308.292 123.597 289.781 106.409C289.781 106.409 311.781 89.9086 341.781 73.4086C352.313 100.442 382.453 308.486 342.225 344.214Z' />

    <rect x='149' y='19' width='69' height='69' rx='34.5' />

    <defs>
      <filter
        id='filter0_d_403_2'
        x='0'
        y='0'
        width='385'
        height='385'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_403_2'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_403_2'
          result='shape'
        />
      </filter>
    </defs>
  </Icon>
)

export default Logo
