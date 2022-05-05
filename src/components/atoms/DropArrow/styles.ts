import Arrow from 'components/atoms/Icon/icons/Arrow'

import styled from 'styled-components'

const DropArrowStyle = styled(Arrow)`
  width: 18px;
  height: 18px;

  path {
    fill: ${({ theme }) => theme.colors.secondary};
  }
`

export { DropArrowStyle }
