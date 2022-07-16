import useAppSelector from 'hooks/useAppSelector'

const useAvatar = () => {
  const { user } = useAppSelector(({ userStore }) => userStore)

  const avatar = user?.avatar

  return { avatar }
}

export { useAvatar }
