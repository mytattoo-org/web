import { HTMLProps, ReactNode } from 'react'

interface IListItemProps extends HTMLProps<HTMLDivElement> {
  index: number
  options: IOption[]
  condition: boolean
  onSidebar?: boolean
}

interface IOption {
  name: string
  label: string
  icon: ReactNode
}

interface IUseListItemParams {
  index: number
  options: IOption[]
  onSidebar: boolean
}

type TUseListItem = (params: IUseListItemParams) => any

export type { IListItemProps, TUseListItem, IOption }
