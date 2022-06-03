import type { TStoreDispatch } from 'typescript/redux.types'

import { useDispatch } from 'react-redux'

const useAppDispatch = () => useDispatch<TStoreDispatch>()

export default useAppDispatch
