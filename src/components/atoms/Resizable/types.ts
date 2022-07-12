import { HTMLAttributes, ReactNode } from 'react'

interface IResizableProps
  extends HTMLAttributes<HTMLDivElement>,
    IUseResizableParams {
  children: ReactNode
}

interface IUseResizableParams {
  minWidth: number
  maxWidth: number
  initialWidth?: number
}

type TUseResizable = (params: IUseResizableParams) => any

export type { IResizableProps, TUseResizable }
