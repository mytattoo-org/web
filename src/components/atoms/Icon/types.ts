import { SVGAttributes } from 'react'

interface IIconStyleProps {
  color?: string
}

interface IIconProps extends SVGAttributes<SVGElement>, IIconStyleProps {
  desc?: string
  title?: string
  labelledBy?: string
}

export type { IIconStyleProps, IIconProps }
