import { IconStyle } from './styles'
import type { IIconProps } from './types'

import { composeClassName } from 'utils/composeClassName'

const Icon = ({
  desc,
  title,
  children,
  className,
  labelledBy,
  ...props
}: IIconProps) => {
  const descId = labelledBy ? `${labelledBy}Desc` : undefined
  const titleId = labelledBy ? `${labelledBy}Title` : undefined
  const ariaLabelledBy = descId && titleId ? `${titleId} ${descId}` : undefined

  return (
    <IconStyle
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      aria-labelledby={ariaLabelledBy}
      className={composeClassName('Icon', className)}
      {...props}
    >
      <title id={titleId}>{title}</title>

      <desc id={descId}>{desc}</desc>

      {children}
    </IconStyle>
  )
}

export default Icon
