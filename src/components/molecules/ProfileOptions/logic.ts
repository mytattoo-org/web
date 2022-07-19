import useAppDispatch from 'hooks/useAppDispatch'

import { userStore } from 'store/user'

import { useRouter } from 'next/router'
import { MouseEventHandler, useEffect, useState } from 'react'

const useProfileOptions = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [showSidebar, setShowSidebar] = useState(false)

  const onLogoutClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(userStore.actions.logout())
  }

  useEffect(() => {
    setShowSidebar(false)
  }, [router.pathname])

  return { onLogoutClick, setShowSidebar, showSidebar, router }
}

export { useProfileOptions }
