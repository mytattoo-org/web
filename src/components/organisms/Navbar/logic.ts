import useAppSelector from 'hooks/useAppSelector'

const useNavbar = () => {
  const { user } = useAppSelector(({ userStore }) => userStore)

  const isAuth = user?.id

  return { isAuth }
}

export { useNavbar }
