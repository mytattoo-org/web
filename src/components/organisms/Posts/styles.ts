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

    width: 100%;
  }

  > ul {
    width: 100%;

    > li {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      margin-top: 24px;
    }
  }
`

export { PostsStyle }
