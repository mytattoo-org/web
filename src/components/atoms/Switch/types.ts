import { FormikProps } from 'formik'
import type { TargetAndTransition, Transition } from 'framer-motion'
import type { ComponentPropsWithoutRef } from 'react'

interface ISwitchProps extends Omit<ComponentPropsWithoutRef<'input'>, 'name'> {
  name: string
  label?: string
  formik: FormikProps<any>
}

type TUseSwitch = ({
  name,
  formik
}: {
  name: string
  formik: FormikProps<any>
}) => {
  isOn: boolean
  transition: Transition
  toggleSwitch: () => void
  circleAnimation: TargetAndTransition
  backgroundAnimation: TargetAndTransition
}

export type { ISwitchProps, TUseSwitch }
