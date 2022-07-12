import styled from 'styled-components'

const ResizableStyle = styled.div`
  position: relative;

  .Content {
    width: 100%;
  }

  .Handle {
    position: fixed;
    top: 78px;
    left: 8px;
    z-index: 3;

    width: 24px;
    height: 24px;

    .Icon {
      width: 24px;
      height: 24px;

      margin-top: 17px;
      transform: translateY(-50%);

      fill: ${({ theme }) => theme.colors.secondary};

      &:active {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media screen and (min-width: 1080px) {
    .Handle {
      left: 308px;
    }
  }
`

export { ResizableStyle }
