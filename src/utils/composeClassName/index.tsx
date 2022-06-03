import type { TComposeClassName } from './types'

const composeClassName: TComposeClassName = (
  componentClassName,
  propClassName
) =>
  propClassName ? `${componentClassName} ${propClassName}` : componentClassName

export default composeClassName
