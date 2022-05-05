import type { TStoreDispatch } from 'store/types'

import { useDispatch } from 'react-redux'

const useAppDispatch = () => useDispatch<TStoreDispatch>()

export default useAppDispatch
