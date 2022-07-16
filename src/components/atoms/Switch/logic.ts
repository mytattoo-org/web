import type { TUseSwitch } from './types'

import type { TargetAndTransition, Transition } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

const transition: Transition = { type: 'tween', duration: 0.3 }

const useSwitch: TUseSwitch = ({ name, formik }) => {
  const theme = useTheme()
  const [isOn, setIsOn] = useState(formik.values[name])

  const backgroundAnimation: TargetAndTransition = {
    backgroundColor: isOn
      ? [theme.colors.secondary, theme.colors.primary]
      : [theme.colors.primary, theme.colors.secondary]
  }

  const circleAnimation: TargetAndTransition = {
    x: isOn ? [0, 20] : [20, 0],
    backgroundColor: isOn
      ? [theme.colors.background, theme.colors.secondary]
      : [theme.colors.secondary, theme.colors.background]
  }

  const toggleSwitch = () => {
    formik.setFieldValue(name, !isOn)
  }

  useEffect(() => {
    setIsOn(formik.values[name])
  }, [setIsOn, name, formik.values])

  return {
    isOn,
    transition,
    toggleSwitch,
    circleAnimation,
    backgroundAnimation
  }
}

export { useSwitch }
