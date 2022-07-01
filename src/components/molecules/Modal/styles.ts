import { darken, transparentize } from 'polished'
import styled from 'styled-components'

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) =>
    transparentize(0.3, darken(0.3, theme.colors.background))};

  .transparentBackground {
    position: fixed;
    z-index: -1;

    width: 100vw;
    height: 100vh;

    background-color: transparent;
  }

  .loadingWrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .Loading {
      width: 48px;
      height: 48px;

      path {
        fill: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`

export { ModalStyle }
