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
    > main {
      width: calc(70vh);
      max-width: calc(100vw - 16px - 600px - 24px);
    }

    > aside {
      position: fixed;
      display: flex;

      width: 300px;
    }
  }
`

export { FeedStyle }
