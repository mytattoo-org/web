import { ArtistHeartStyle } from './styles'
import type { IArtistHeartProps } from './types'

import { composeClassName } from 'utils/composeClassName'

const ArtistHeart = ({ className, ...props }: IArtistHeartProps) => (
  <ArtistHeartStyle
    viewBox='0 0 25 18'
    className={composeClassName('ArtistHeart', className)}
    {...props}
  >
    <path d='M14.0623 4.5C14.0623 5.69347 13.5684 6.83807 12.6894 7.68198C11.8103 8.52589 10.618 9 9.37486 9C8.13168 9 6.93941 8.52589 6.06035 7.68198C5.18128 6.83807 4.68743 5.69347 4.68743 4.5C4.68743 3.30653 5.18128 2.16193 6.06035 1.31802C6.93941 0.474106 8.13168 0 9.37486 0C10.618 0 11.8103 0.474106 12.6894 1.31802C13.5684 2.16193 14.0623 3.30653 14.0623 4.5ZM0 16.5C0 18 1.56248 18 1.56248 18H17.1872C17.1872 18 18.7497 18 18.7497 16.5C18.7497 15 17.1872 10.5 9.37486 10.5C1.56248 10.5 0 15 0 16.5Z' />

    <path d='M20.9997 11C28.7676 6.21069 23.2188 2.48467 20.9997 4.61276V4.61425C18.7805 2.48467 13.2333 6.21069 20.9997 11Z' />
  </ArtistHeartStyle>
)

export default ArtistHeart
