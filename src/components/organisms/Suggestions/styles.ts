import type { ISuggestionsStyleProps } from './types'

import styled from 'styled-components'

const SuggestionsStyle = styled.section<ISuggestionsStyleProps>`
  header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 8px;
  }

  ul li button {
    width: 100%;
  }
`

export { SuggestionsStyle }
