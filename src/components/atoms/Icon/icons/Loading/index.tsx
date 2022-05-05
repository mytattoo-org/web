import { LoadingStyle } from './styles'

import type { IIconProps } from '../../types'

import { composeClassName } from 'utils/composeClassName'

const Loading = ({ className, ...props }: IIconProps) => (
  <LoadingStyle
    viewBox='0 0 24 24'
    className={composeClassName('Loading', className)}
    {...props}
  >
    <path d='M4.06142 12.9974C3.99257 12.4495 3.55131 12 2.99902 12V12C2.44674 12 1.99384 12.4488 2.04898 12.9983C2.14638 13.9691 2.3855 14.9222 2.76023 15.8268C3.26277 17.0401 3.99937 18.1425 4.92796 19.0711C5.85654 19.9997 6.95893 20.7362 8.17219 21.2388C9.07685 21.6135 10.0299 21.8526 11.0007 21.95C11.5502 22.0052 11.999 21.5523 11.999 21V21C11.999 20.4477 11.5496 20.0065 11.0016 19.9376C9.24762 19.7172 7.60541 18.9201 6.34217 17.6569C5.07892 16.3936 4.28178 14.7514 4.06142 12.9974Z' />
  </LoadingStyle>
)

export default Loading
