import { FormikProps } from 'formik'
import type { TargetAndTransition, Transition } from 'framer-motion'
import type { ComponentPropsWithoutRef } from 'react'

interface ISwitchProps extends ComponentPropsWithoutRef<'input'> {
  label?: string
  formik: FormikProps<any>
}

type TUseSwitch = () => {
  isOn: boolean
  transition: Transition
  toggleSwitch: () => void
  circleAnimation: TargetAndTransition
  backgroundAnimation: TargetAndTransition
}

export type { ISwitchProps, TUseSwitch }
