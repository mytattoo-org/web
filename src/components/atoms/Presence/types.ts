import { AnimatePresenceProps } from 'framer-motion'
import { ReactNode } from 'react'

interface IPresenceProps extends AnimatePresenceProps {
  children: ReactNode
  condition: boolean
}

export type { IPresenceProps }
