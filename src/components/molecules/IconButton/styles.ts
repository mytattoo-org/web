import styled from 'styled-components'

const IconButtonStyle = styled.button`
  .Icon {
    width: 24px;
    height: 24px;

    path {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`

export { IconButtonStyle }
