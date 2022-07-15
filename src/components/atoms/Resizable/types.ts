import { ForwardedRef, HTMLAttributes, ReactNode } from 'react'

interface IResizableProps
  extends HTMLAttributes<HTMLDivElement>,
    Omit<IUseResizableParams, 'realCondition'> {
  children: ReactNode
  condition?: boolean
}

interface IForwardedResizable {
  resetSize: () => void
}

interface IUseResizableParams {
  minWidth: number
  maxWidth: number
  initialWidth?: number
  realCondition?: boolean
  ref: ForwardedRef<IForwardedResizable>
}

type TUseResizable = (params: IUseResizableParams) => any

export type { IResizableProps, TUseResizable, IForwardedResizable }
