import type { ITooltipStyleProps } from './types'

import styled from 'styled-components'

const TooltipStyle = styled.div<ITooltipStyleProps>`
  .Content {
    position: absolute;
    z-index: 1;

    display: flex;

    padding: 4px;
    border-radius: 4px;
    transform: ${({ marginTop }) => `translateY(calc(-100% - ${marginTop}px))`};

    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.red};
  }

  .Trigger {
    position: relative;

    display: flex;
    justify-content: center;

    color: ${({ theme }) => theme.colors.secondary};

    .TooltipArrow {
      position: absolute;
      top: ${({ marginTop }) => `calc(-${marginTop}px)`};

      height: 8px;

      path {
        fill: ${({ theme }) => theme.colors.red};
      }
    }

    .Alert {
      height: 18px;

      path {
        fill: ${({ theme }) => theme.colors.red};
      }
    }
  }
`
export { TooltipStyle }
