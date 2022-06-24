import { SwitchStyle } from './styles'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from 'styled-components'

const Switch = () => {
  const theme = useTheme()
  const [isOn, setIsOn] = useState(false)

  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <SwitchStyle
      className='switch'
      onClick={toggleSwitch}
      animate={{
        backgroundColor: isOn
          ? [theme.colors.secondary, theme.colors.primary]
          : [theme.colors.primary, theme.colors.secondary]
      }}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      <motion.div
        animate={{
          x: isOn ? [0, 20] : [20, 0],
          backgroundColor: isOn
            ? [theme.colors.background, theme.colors.secondary]
            : [theme.colors.secondary, theme.colors.background]
        }}
        transition={{ type: 'tween', duration: 0.3 }}
      />
    </SwitchStyle>
  )
}

export { Switch }
