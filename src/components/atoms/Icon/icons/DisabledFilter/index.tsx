import Icon from '../../'
import type { IIconProps } from '../../types'

import { composeClassName } from 'utils/composeClassName'

const DisabledFilter = ({ className, ...props }: IIconProps) => (
  <Icon
    viewBox='0 0 19 22'
    className={composeClassName('DisabledFilter', className)}
    {...props}
  >
    <path d='M5.414 0.414001L4 1.828L5.172 3H1C0.447 3 0 3.442 0 3.99V6.546C0 7.071 0.211 7.575 0.586 7.946L6.707 14C6.79974 14.0915 6.8734 14.2005 6.92369 14.3206C6.97399 14.4408 6.99993 14.5697 7 14.7V21.01C7 21.745 7.782 22.223 8.447 21.894L10.447 20.905C10.6126 20.8238 10.7521 20.6979 10.8499 20.5415C10.9476 20.3851 10.9996 20.2044 11 20.02V14.7C11 14.438 11.105 14.186 11.293 14L13.746 11.574L16.728 14.556L18.142 13.142L5.414 0.414001ZM17.414 7.946L16.59 8.761L10.828 3H17C17.553 3 18 3.442 18 3.99V6.546C17.9997 6.80651 17.9478 7.06439 17.8472 7.3047C17.7466 7.54501 17.5994 7.76298 17.414 7.946Z' />
  </Icon>
)

export default DisabledFilter
