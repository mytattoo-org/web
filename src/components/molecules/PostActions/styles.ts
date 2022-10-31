import OriginalHashtag from 'components/atoms/Icon/icons/Hashtag'

import styled from 'styled-components'

const Hashtag = styled(OriginalHashtag)`
  fill: ${({ theme }) => theme.colors.secondary};
`

const OutlinedHashtag = styled(OriginalHashtag)`
  stroke-width: 32px;

  fill: none;
  stroke: ${({ theme }) => theme.colors.secondary};
`

const PostActionsStyle = styled.ul`
  position: relative;

  display: flex;
  flex-wrap: wrap;

  width: 100%;
  overflow: hidden;
  margin-top: 16px;

  > li {
    &:last-child {
      position: absolute;
      right: 0;
      top: 50%;

      transform: translateY(-50%);
    }

    & + li {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: 8px;
    }
  }

  .HeartButton .Icon,
  .IconButton .Icon {
    height: 24px;
  }
`

export { PostActionsStyle, Hashtag, OutlinedHashtag }
