import styled, { css } from 'styled-components'

interface IPostsStyle {
  showFilters?: boolean
  iconPlusMargin?: number
}

const PostsStyle = styled.main<IPostsStyle>`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 0 16px;

  .Resizable {
    position: relative;

    .Content {
      width: 100%;
    }

    .Handle {
      position: fixed;
      top: 78px;
      left: 16px;
      z-index: 3;

      width: 24px;
      height: 24px;

      .Icon {
        fill: ${({ theme }) => theme.colors.secondary};

        &:active {
          fill: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  .backToShortcuts {
    position: absolute;

    opacity: 0;
  }

  .createPost {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
  }

  .posts {
    width: 100%;

    > li {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      margin-top: 24px;
    }
  }

  @media screen and (min-width: 768px) {
    width: auto;
    padding: 0px;
    padding-left: ${({ iconPlusMargin }) => iconPlusMargin}px;

    ${({ showFilters }) =>
      !showFilters &&
      css`
        margin-right: 300px;
      `};
  }

  @media screen and (min-width: 1080px) {
    .Resizable .Handle {
      left: ${({ showFilters }) => (showFilters ? 316 : 16)}px;
    }
  }
`

export { PostsStyle }
