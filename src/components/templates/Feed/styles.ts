import styled from 'styled-components'

const FeedStyle = styled.div`
  display: flex;
  overflow-x: hidden;
  justify-content: center;

  padding: 78px 0;

  > section {
    width: 100%;
  }

  > aside {
    display: none;
  }

  #shortcuts {
    display: none;
  }

  @media screen and (min-width: 1080px) {
    > section {
      width: calc(50vw - 16px);
    }

    > aside {
      position: fixed;

      display: flex;

      width: 25vw;
      height: calc(100vh - 78px);
    }
  }
`

export { FeedStyle }
