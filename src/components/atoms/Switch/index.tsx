import { SwitchStyle } from './styles'
import type { ISwitchProps } from './types'

import composeClassName from 'utils/composeClassName'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from 'styled-components'

const Switch = ({ className, ...props }: ISwitchProps) => {
  const theme = useTheme()
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <SwitchStyle
      onClick={toggleSwitch}
      transition={{ type: 'tween', duration: 0.3 }}
      className={composeClassName('Switch', className)}
      animate={{
        backgroundColor: isOn
          ? [theme.colors.secondary, theme.colors.primary]
          : [theme.colors.primary, theme.colors.secondary]
      }}
    >
      <motion.div
        transition={{ type: 'tween', duration: 0.3 }}
        animate={{
          x: isOn ? [0, 20] : [20, 0],
          backgroundColor: isOn
            ? [theme.colors.background, theme.colors.secondary]
            : [theme.colors.secondary, theme.colors.background]
        }}
      />

      <input type='checkbox' checked={isOn} {...props} />
    </SwitchStyle>
  )
}

export { Switch }
