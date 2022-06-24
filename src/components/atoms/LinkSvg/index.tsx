import { LinkSvgStyle } from './styles'
import type { ILinkSvgProps } from './types'

import composeClassName from 'utils/composeClassName'

import Link from 'next/link'

const LinkSvg = ({ children, className, ...props }: ILinkSvgProps) => (
  <LinkSvgStyle className={composeClassName('LinkSvg', className)}>
    <Link {...props}>{children}</Link>
  </LinkSvgStyle>
)

export { LinkSvg }
