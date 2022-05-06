import type { ITooltipStyleProps } from './types'

import styled from 'styled-components'

const TooltipStyle = styled.div<ITooltipStyleProps>`
  position: relative;

  .Content {
    position: absolute;
    z-index: 1;
  }

  .Trigger {
    display: flex;
    justify-content: center;
  }
`

export { TooltipStyle }
