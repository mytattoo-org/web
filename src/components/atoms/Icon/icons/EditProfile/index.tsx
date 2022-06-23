import Icon from '../..'
import type { IIconProps } from '../../types'

import composeClassName from 'utils/composeClassName'

const EditProfile = ({ className, ...props }: IIconProps) => (
  <Icon
    viewBox='0 0 31 18'
    className={composeClassName('EditProfile', className)}
    {...props}
  >
    <path d='M14.3739 4.5C14.3739 5.69347 13.8691 6.83807 12.9706 7.68198C12.072 8.52589 10.8533 9 9.58261 9C8.31188 9 7.09319 8.52589 6.19465 7.68198C5.2961 6.83807 4.79131 5.69347 4.79131 4.5C4.79131 3.30653 5.2961 2.16193 6.19465 1.31802C7.09319 0.474106 8.31188 0 9.58261 0C10.8533 0 12.072 0.474106 12.9706 1.31802C13.8691 2.16193 14.3739 3.30653 14.3739 4.5ZM0 16.5C0 18 1.5971 18 1.5971 18H17.5681C17.5681 18 19.1652 18 19.1652 16.5C19.1652 15 17.5681 10.5 9.58261 10.5C1.5971 10.5 0 15 0 16.5Z' />

    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21 12.125L27.25 5.875L29.125 7.75L22.875 14H21V12.125ZM27.875 5.25L29.125 4L31 5.875L29.7494 7.12562L27.875 5.25Z'
    />
  </Icon>
)

export default EditProfile
