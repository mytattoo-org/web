import { useTooltip } from './logic'
import { TooltipStyle } from './styles'
import type { ITooltipProps } from './types'

import TooltipArrow from 'components/atoms/Icon/icons/TooltipArrow'

import composeClassName from 'utils/composeClassName'

const Tooltip = ({
  trigger: Trigger,
  content: Content,
  className,
  name,
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
        className='Trigger'
        onClick={onTriggerClick}
        onMouseEnter={onTriggerMouseEnter}
        onMouseLeave={onTriggerMouseLeave}
      >
        {Trigger}
      </button>
    </TooltipStyle>
  )
}

export default Tooltip
