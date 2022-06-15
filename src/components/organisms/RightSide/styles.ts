import type { IRightSideStyleProps } from './types'

import styled from 'styled-components'

const RightSideStyle = styled.aside<IRightSideStyleProps>`
  right: 0;

  display: flex;
  flex-flow: column nowrap;

  padding: 0 24px;
  max-width: 400px;

  overflow-x: hidden;
  overflow-y: scroll;

  section + section {
    margin-top: 24px;
  }

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: solid 4px ${({ theme }) => theme.colors.background};
  }

  > a {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }
`

export { RightSideStyle }
