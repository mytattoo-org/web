import useAppDispatch from 'hooks/useAppDispatch'

import { userStore } from 'store/user'

import { MouseEventHandler } from 'react'

const useProfileOptions = () => {
  const dispatch = useAppDispatch()

  const onLogoutClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(userStore.actions.logout())
  }

  return { onLogoutClick }
}

export { useProfileOptions }
