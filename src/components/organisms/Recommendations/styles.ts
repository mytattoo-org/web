import type { IRecommendationsStyleProps } from './types'

import styled from 'styled-components'

const RecommendationsStyle = styled.section<IRecommendationsStyleProps>`
  header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 8px;
  }

  ul li button {
    width: 100%;
  }
`

export { RecommendationsStyle }
