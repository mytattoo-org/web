import { TStoreState } from 'store/types'

import { TypedUseSelectorHook } from 'react-redux'

type TUseAppSelector = TypedUseSelectorHook<TStoreState>

export type { TUseAppSelector }
