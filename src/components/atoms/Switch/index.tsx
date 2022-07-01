import { useSwitch } from './logic'
import { Background, Circle, SwitchStyle } from './styles'
import type { ISwitchProps } from './types'

import composeClassName from 'utils/composeClassName'

const Switch = ({ className, label, name, ...props }: ISwitchProps) => {
  const {
    isOn,
    transition,
    toggleSwitch,
    circleAnimation,
    backgroundAnimation
  } = useSwitch()

  return (
    <SwitchStyle
      onClick={toggleSwitch}
      className={composeClassName('Switch', className)}
    >
      <Background transition={transition} animate={backgroundAnimation}>
        <Circle animate={circleAnimation} transition={transition} />

        <input type='checkbox' checked={isOn} name={name} {...props} />
      </Background>

      {label && <label htmlFor={name}>{label}</label>}
    </SwitchStyle>
  )
}

export { Switch }
