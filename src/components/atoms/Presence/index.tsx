import type { IPresenceProps } from './types'

import { AnimatePresence } from 'framer-motion'

const Presence = ({ children, condition, ...props }: IPresenceProps) => (
  <AnimatePresence {...props}>{condition && children}</AnimatePresence>
)

export default Presence
