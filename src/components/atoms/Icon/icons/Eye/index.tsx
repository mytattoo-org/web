import Icon from '../../'
import type { IIconProps } from '../../types'

import composeClassName from 'utils/composeClassName'

const Eye = ({ className, ...props }: IIconProps) => (
  <Icon
    className={composeClassName('Eye', className)}
    viewBox='0 0 22 16'
    {...props}
  >
    <path
      d='M19.8698 6.962C20.3438 7.582 20.3438 8.419 19.8698 9.038C18.3768 10.987 14.7948 15 10.6128 15C6.4308 15 2.8488 10.987 1.3558 9.038C1.12519 8.74113 1 8.37592 1 8C1 7.62408 1.12519 7.25887 1.3558 6.962C2.8488 5.013 6.4308 1 10.6128 1C14.7948 1 18.3768 5.013 19.8698 6.962V6.962Z'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />

    <path
      d='M10.6128 11C12.2696 11 13.6128 9.65685 13.6128 8C13.6128 6.34315 12.2696 5 10.6128 5C8.95594 5 7.61279 6.34315 7.61279 8C7.61279 9.65685 8.95594 11 10.6128 11Z'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Icon>
)

export default Eye
