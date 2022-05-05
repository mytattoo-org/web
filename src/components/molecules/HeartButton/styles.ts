import styled from 'styled-components'

const HeartButtonStyle = styled.button`
  width: 100%;
  height: 100%;

  overflow: visible;
  outline-offset: -2px;

  .Icon {
    height: 24px;

    path {
      stroke: ${({ theme }) => theme.colors.secondary};
      fill: transparent;
    }
  }

  .liked path {
    fill: ${({ theme }) => theme.colors.red};
    stroke: ${({ theme }) => theme.colors.red};
  }
`

export { HeartButtonStyle }
