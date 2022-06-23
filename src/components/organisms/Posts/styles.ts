import styled from 'styled-components'

const PostsStyle = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  > a {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  > header {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: clamp(200px, 100% - 16px, 65vh);
  }

  > ul {
    width: clamp(200px, 100% - 16px, 65vh);

    > li {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      margin-top: 24px;
    }
  }

  @media screen and (min-width: 1080px) {
    width: calc(50vw - 16px);
  }
`

export { PostsStyle }
