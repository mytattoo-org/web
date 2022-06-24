import type { TUseEditProfile } from './types'

import useAppSelector from 'hooks/useAppSelector'

const useEditProfile: TUseEditProfile = () => {
  const { user } = useAppSelector(({ userStore }) => userStore)

  return { user }
}

export { useEditProfile }
