import { useSwitch } from './logic'
import { Background, Circle, SwitchStyle } from './styles'
import type { ISwitchProps } from './types'

import composeClassName from 'utils/composeClassName'

const Switch = ({ className, label, name, formik, ...props }: ISwitchProps) => {
  const {
    isOn,
    transition,
    toggleSwitch,
    circleAnimation,
    backgroundAnimation
  } = useSwitch({ name, formik })

  return (
    <SwitchStyle
      role='switch'
      data-cy={name}
      aria-checked={isOn}
      onClick={toggleSwitch}
      className={composeClassName('Switch', className)}
    >
      <Background transition={transition} animate={backgroundAnimation}>
        <Circle animate={circleAnimation} transition={transition} />

        <input name={name} checked={isOn} type='checkbox' {...props} readOnly />
      </Background>

      {label && <label htmlFor={name}>{label}</label>}
    </SwitchStyle>
  )
}

export { Switch }
