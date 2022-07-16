import type { IFieldStyleProps } from './types'

import OriginalTooltip from 'components/molecules/Tooltip'

import styled, { css } from 'styled-components'

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  border-radius: 8px;
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.red};

  > div {
    flex: 1;

    margin-left: 8px;
  }
`

const Tooltip = styled(OriginalTooltip)`
  .Content {
    left: 0px;
    padding-left: 8px;

    .Alert {
      height: 18px;

      path {
        fill: ${({ theme }) => theme.colors.secondary};
      }
    }
  }

  .Trigger {
    margin: 0 16px;

    .Alert {
      height: 18px;

      path {
        fill: ${({ theme }) => theme.colors.red};
      }
    }

    .TooltipArrow {
      position: absolute;
      z-index: 2;
      left: 5px;
      bottom: 8px;

      height: 8px;

      path {
        fill: ${({ theme }) => theme.colors.red};
      }
    }
  }
`

const FieldStyle = styled.div<IFieldStyleProps>`
  position: relative;

  display: flex;
  align-items: center;

  padding: 4px;
  border-radius: 16px;

  border: solid 1px ${({ theme }) => theme.colors.secondary};

  input {
    height: 40px;
  }

  label {
    position: absolute;
    top: -50%;

    padding: 0 8px;
    margin-left: 16px;
    transform: translateY(50%);

    background-color: ${({ theme }) => theme.colors.background};
  }

  .Input {
    width: 100%;
  }

  .eye {
    width: 24px;
    height: 24px;

    max-width: 24px;
    max-height: 24px;

    min-width: 24px;
    min-height: 24px;

    margin: 0 16px;

    path {
      stroke: ${({ theme }) => theme.colors.secondary};
    }
  }

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border: solid ${theme.colors.red} 1px;

      .eye {
        path {
          stroke: ${theme.colors.red};
        }
      }
    `};

  ${({ hasFilled, hasError, theme }) =>
    hasFilled &&
    !hasError &&
    css`
      color: ${theme.colors.primary};
      border: solid ${theme.colors.primary} 1px;

      .eye path {
        stroke: ${theme.colors.primary};
      }
    `};
`

export { FieldStyle, Error, Tooltip }
