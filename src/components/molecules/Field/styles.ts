import type { IFieldStyleProps } from './types'

import OriginalTooltip from 'components/molecules/Tooltip'

import styled, { css } from 'styled-components'

const Error = styled.div`
  display: flex;

  padding: 8px 16px;
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
  .Trigger .Alert {
    height: 18px;

    path {
      fill: ${({ theme }) => theme.colors.red};
    }
  }

  .Content {
    left: -13px;
    bottom: 16px;

    .Alert {
      height: 18px;

      path {
        fill: ${({ theme }) => theme.colors.secondary};
      }
    }

    .TooltipArrow {
      position: absolute;
      left: 18px;
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
    width: 30px;
    height: 30px;

    margin: 0 16px;

    path {
      stroke: ${({ theme }) => theme.colors.secondary};
    }
  }

  ${({ hasError, theme }) =>
    hasError &&
    css`
      padding-left: 12px;

      border: solid ${theme.colors.red} 1px;

      .eye path {
        stroke: ${theme.colors.red};
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
