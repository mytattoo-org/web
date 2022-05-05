import { lighten } from 'polished'
import styled from 'styled-components'

const PostStyle = styled.section`
  width: 100%;
  padding: 16px;
  border-radius: 16px;

  background-color: ${({ theme }) => lighten(0.03, theme.colors.background)};

  img {
    border-radius: 8px;
    outline-offset: -8px;
  }

  article {
    position: relative;
  }
`

export { PostStyle }
