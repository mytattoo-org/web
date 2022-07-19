import { IShortcuts } from './types'

import useAppSelector from 'hooks/useAppSelector'

const shortcuts: IShortcuts[] = [
  { id: 'posts', label: 'Postagens' },
  { id: 'createPost', label: 'Criar postagem' },
  { id: 'filters', label: 'Filtros de postagens' },
  { id: 'suggestions', label: 'Sugestões' }
]

const useNavbar = () => {
  const { loading, user } = useAppSelector(({ userStore }) => userStore)

  const isAuth = user?.id

  return {
    isAuth,
    shortcuts,
    loading: loading === true || loading === undefined
  }
}

export { useNavbar }
