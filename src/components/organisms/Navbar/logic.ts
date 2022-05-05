import useAppSelector from 'hooks/useAppSelector'

const useNavbar = () => {
  const { user } = useAppSelector(({ user }) => user)

  const isAuth = user?.id

  return { isAuth }
}

export { useNavbar }
