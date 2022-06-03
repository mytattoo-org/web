import { TStoreState } from 'typescript/redux.types'

import { TypedUseSelectorHook } from 'react-redux'

type TUseAppSelector = TypedUseSelectorHook<TStoreState>

export type { TUseAppSelector }
