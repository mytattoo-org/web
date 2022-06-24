import { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface ILinkSvgProps extends LinkProps {
  children: ReactNode
  className?: string
}

export type { ILinkSvgProps }
