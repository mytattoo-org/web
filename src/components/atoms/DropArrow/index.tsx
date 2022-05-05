import { useDropArrow } from './logic'
import { DropArrowStyle } from './styles'
import type { IDropArrowProps } from './types'

import { composeClassName } from 'utils/composeClassName'

const DropArrow = ({ condition, className, ...props }: IDropArrowProps) => {
  const { arrowAnimation } = useDropArrow(condition)

  return (
    <DropArrowStyle
      style={arrowAnimation}
      className={composeClassName('DropArrow', className)}
      {...props}
    />
  )
}

export default DropArrow
