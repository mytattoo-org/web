import useAppDispatch from 'hooks/useAppDispatch'

import { user } from 'store/user'

import { MouseEventHandler } from 'react'

const useProfileOptions = () => {
  const dispatch = useAppDispatch()

  const onLogoutClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(user.actions.logout())
  }

  return { onLogoutClick }
}

export { useProfileOptions }
