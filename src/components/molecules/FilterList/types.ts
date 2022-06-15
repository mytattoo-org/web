import { ReactNode } from 'react'

interface IFilter {
  name: string
  id: string
}

interface IFilterListProps {
  icon?: ReactNode
  filters?: IFilter[]
  onClick: (filterData: IFilter) => void
}

type TUseFilterList = () => any

export type { IFilterListProps, TUseFilterList }
