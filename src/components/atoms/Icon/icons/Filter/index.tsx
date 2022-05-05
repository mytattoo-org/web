import Icon from '../../'
import type { IIconProps } from '../../types'

import { composeClassName } from 'utils/composeClassName'

const Filter = ({ className, ...props }: IIconProps) => (
  <Icon
    viewBox='0 0 19 19'
    className={composeClassName('Filter', className)}
    {...props}
  >
    <path d='M17.5 0H1.5C1.23478 0 0.980429 0.105357 0.792892 0.292893C0.605356 0.480429 0.5 0.734784 0.5 1V3.59C0.5 4.113 0.713 4.627 1.083 4.997L6.5 10.414V18C6.5002 18.1704 6.54388 18.3379 6.6269 18.4867C6.70992 18.6354 6.82955 18.7605 6.97444 18.8502C7.11934 18.9398 7.28471 18.9909 7.4549 18.9988C7.6251 19.0066 7.79447 18.9709 7.947 18.895L11.947 16.895C12.286 16.725 12.5 16.379 12.5 16V10.414L17.917 4.997C18.287 4.627 18.5 4.113 18.5 3.59V1C18.5 0.734784 18.3946 0.480429 18.2071 0.292893C18.0196 0.105357 17.7652 0 17.5 0Z' />
  </Icon>
)

export default Filter
