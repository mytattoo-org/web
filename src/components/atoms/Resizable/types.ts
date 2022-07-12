import { HTMLAttributes, ReactNode } from 'react'

interface IResizableProps
  extends HTMLAttributes<HTMLDivElement>,
    Omit<IUseResizableParams, 'realCondition'> {
  children: ReactNode
  condition?: boolean
}

interface IUseResizableParams {
  minWidth: number
  maxWidth: number
  initialWidth?: number
  realCondition?: boolean
}

type TUseResizable = (params: IUseResizableParams) => any

export type { IResizableProps, TUseResizable }
