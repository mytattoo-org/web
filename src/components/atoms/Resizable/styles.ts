import styled from 'styled-components'

const ResizableStyle = styled.div`
  position: relative;

  .Content {
    width: 100%;
  }

  .Handle {
    position: fixed;
    left: calc(300px - 12px);
    top: 78px;
    z-index: 3;

    cursor: row-resize;

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
`

export { ResizableStyle }
