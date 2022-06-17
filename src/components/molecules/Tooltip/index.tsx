import { useTooltip } from './logic'
import { TooltipStyle } from './styles'
import type { ITooltipProps } from './types'

import Alert from 'components/atoms/Icon/icons/Alert'
import TooltipArrow from 'components/atoms/Icon/icons/TooltipArrow'

import composeClassName from 'utils/composeClassName'

const Tooltip = ({
  ariaName,
  className,
  content: Content,
  marginTop = 16,
  trigger: Trigger = <Alert />,
  ...props
}: ITooltipProps) => {
  const {
    isHovering,
    onTriggerClick,
    onTriggerMouseEnter,
    onTriggerMouseLeave
  } = useTooltip()

  return (
    <TooltipStyle
      marginTop={marginTop}
      className={composeClassName('Tooltip', className)}
      {...props}
    >
      {isHovering && <div className='Content'>{Content}</div>}

      <button
        type='button'
        className='Trigger'
        onClick={onTriggerClick}
        onMouseEnter={onTriggerMouseEnter}
        onMouseLeave={onTriggerMouseLeave}
        aria-label={ariaName ? `${ariaName} tooltip trigger` : undefined}
      >
        {isHovering && <TooltipArrow />}

        {Trigger}
      </button>
    </TooltipStyle>
  )
}

export default Tooltip
