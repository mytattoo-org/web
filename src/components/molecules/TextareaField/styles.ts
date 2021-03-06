import type { IFieldStyleProps } from './types'

import OriginalTooltip from 'components/molecules/Tooltip'

import styled, { css } from 'styled-components'

const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  border-radius: 8px;

  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.red};

  > div {
    flex: 1;

    margin-left: 8px;
  }
`

const Tooltip = styled(OriginalTooltip)`
  .Trigger {
    margin: 0 16px;
  }

  .Content {
    left: -13px;

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

  textarea {
    width: 100%;
    height: 100%;

    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondary};

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.background};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  label {
    position: absolute;
    top: -50%;

    padding: 0 8px;
    margin-left: 16px;
    transform: translateY(50%);

    background-color: ${({ theme }) => theme.colors.background};
  }

  ${({ hasError, theme }) =>
    hasError &&
    css`
      padding-left: 12px;

      border: solid ${theme.colors.red} 1px;
    `};

  ${({ hasFilled, hasError, theme }) =>
    hasFilled &&
    !hasError &&
    css`
      color: ${theme.colors.primary};
      border: solid ${theme.colors.primary} 1px;
    `};
`

export { FieldStyle, Error, Tooltip }
