import { useTooltip } from './logic'
import { TooltipStyle } from './styles'
import type { ITooltipProps } from './types'

import TooltipArrow from 'components/atoms/Icon/icons/TooltipArrow'

const Tooltip = ({
  trigger: Trigger,
  content: Content,
  className = 'Tooltip',
  ...props
}: ITooltipProps) => {
  const { isHovering, onTriggerMouseEnter, onTriggerMouseLeave } = useTooltip()

  return (
    <TooltipStyle className={className} {...props}>
      {isHovering && (
        <div className='content'>
          {Content}

          <TooltipArrow />
        </div>
      )}

      <div
        role='button'
        className='trigger'
        onMouseEnter={onTriggerMouseEnter}
        onMouseLeave={onTriggerMouseLeave}
      >
        {Trigger}
      </div>
    </TooltipStyle>
  )
}

export default Tooltip
