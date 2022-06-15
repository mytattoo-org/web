import { IDisplayProps } from './types'

import OriginalDisplayHorizontal from 'components/atoms/Icon/icons/DisplayHorizontal'
import OriginalDisplayVertical from 'components/atoms/Icon/icons/DisplayVertical'

import styled from 'styled-components'

const DisplayHorizontal = styled(OriginalDisplayHorizontal)<IDisplayProps>`
  path {
    fill: ${({ color }) => color};
  }
`

const DisplayVertical = styled(OriginalDisplayVertical)<IDisplayProps>`
  path {
    fill: ${({ color }) => color};
  }
`

const DisplayOptionsStyle = styled.ul`
  display: flex;

  width: 100%;

  input {
    position: absolute;

    width: 0;
    height: 0;
    opacity: 0;
  }

  li {
    &,
    & label {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .feedOrientation {
    display: none;
  }

  .Icon {
    width: 29px;
    height: 29px;

    &.DisabledFilter,
    &.Filter {
      width: 24px;
      height: 29px;
    }

    &.DisabledFilter {
      height: 26px;

      path {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }

    &.Filter path {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }

  .shortcut {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  @media screen and (min-width: 1080px) {
    .feedOrientation {
      display: block;
    }
  }
`

export { DisplayOptionsStyle, DisplayVertical, DisplayHorizontal }
