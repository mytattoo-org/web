import styled from 'styled-components'

const PostActionsStyle = styled.ul`
  position: relative;

  display: flex;
  flex-wrap: wrap;

  width: 100%;

  margin: 16px 0;
  overflow: hidden;

  > li {
    & + li {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: 8px;
    }

    &:last-child {
      position: absolute;
      right: 0;
      top: 50%;

      transform: translateY(-50%);
    }
  }

  .tattooButton {
    outline-offset: -2px;
  }

  .IconButton .Tattoo {
    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`

export { PostActionsStyle }
