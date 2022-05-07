import { useTooltip } from './logic'
import { TooltipStyle } from './styles'
import type { ITooltipProps } from './types'

import TooltipArrow from 'components/atoms/Icon/icons/TooltipArrow'

import composeClassName from 'utils/composeClassName'

const Tooltip = ({
  trigger: Trigger,
  content: Content,
  className,
  ariaName,
  ...props
}: ITooltipProps) => {
  const {
    isHovering,
    onTriggerClick,
    onTriggerMouseEnter,
    onTriggerMouseLeave
  } = useTooltip()

  return (
    <TooltipStyle className={composeClassName('Tooltip', className)} {...props}>
      {isHovering && (
        <div className='Content'>
          {Content}

          <TooltipArrow />
        </div>
      )}

      <button
        type='button'
        className='Trigger'
        onClick={onTriggerClick}
        onMouseEnter={onTriggerMouseEnter}
        onMouseLeave={onTriggerMouseLeave}
        aria-label={`${ariaName} tooltip trigger`}
      >
        {Trigger}
      </button>
    </TooltipStyle>
  )
}

export default Tooltip
