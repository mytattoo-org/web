import type { TUseListItem } from './types'

import { itemAnimationProps, sidebarItemAnimationProps } from './animations'

import { useRouter } from 'next/router'

const useListItem: TUseListItem = ({ options, index, onSidebar }) => {
  const router = useRouter()

  const { name, icon, label } = options[index]

  const onButtonClick = () => router.push(name)

  const animations = onSidebar
    ? sidebarItemAnimationProps(options, index)
    : itemAnimationProps(options, index)

  return { name, icon, label, onButtonClick, animations }
}

export { useListItem }
