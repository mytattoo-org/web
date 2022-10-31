import { lighten } from 'polished'
import styled from 'styled-components'

const PostStyle = styled.section`
  width: 100%;
  padding: 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => lighten(0.03, theme.colors.background)};

  article {
    position: relative;

    .postImage {
      border-radius: 8px;
      outline-offset: -8px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`

export { PostStyle }
