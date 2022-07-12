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
    > aside {
      position: fixed;
      display: flex;

      width: 300px;
    }
  }
`

export { FeedStyle }
