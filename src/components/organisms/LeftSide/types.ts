import { HTMLAttributes } from 'react'

interface IFilter {
  name: string
  id: string
}

interface IFiltersState {
  added?: IFilter[]
  removed?: IFilter[]
  unsigned?: IFilter[]
}

type TOnFilterClick = (
  filter: IFilter,
  action: 'add' | 'remove' | 'unsign'
) => void

interface ILeftSideStyleProps {}

interface ILeftSideProps
  extends ILeftSideStyleProps,
    HTMLAttributes<HTMLDivElement> {}

export type {
  IFiltersState,
  TOnFilterClick,
  ILeftSideProps,
  ILeftSideStyleProps
}
