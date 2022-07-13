import styled from 'styled-components'

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

  .tattooButton {
    outline-offset: -2px;
  }

  .HeartButton .Icon,
  .IconButton .Icon {
    height: 24px;
  }

  .IconButton .Tattoo path {
    fill: ${({ theme }) => theme.colors.primary};
  }
`

export { PostActionsStyle }
