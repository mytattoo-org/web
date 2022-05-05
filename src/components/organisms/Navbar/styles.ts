import styled from 'styled-components'

const NavbarStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  height: 78px;

  background-color: ${({ theme }) => theme.colors.background};

  > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    > li {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 46px;

      &:first-child {
        display: none;
      }

      &:nth-child(2) {
        flex: 1;
        padding: 0 8px;
      }

      &:last-child {
        display: none;
      }
    }
  }

  @media screen and (min-width: 425px) {
    > ul {
      > li {
        &:first-child {
          display: flex;

          padding-left: 8px;
        }

        &:nth-child(2) {
          padding: 0 16px;
        }

        &:last-child {
          display: flex;

          padding-right: 8px;
        }
      }
    }
  }

  @media screen and (min-width: 1080px) {
    > ul > li {
      width: 25vw;

      &:first-child {
        padding-left: 24px;
      }

      &:nth-child(2) {
        padding: 0px;
        max-width: 65vh;
      }

      &:last-child {
        padding-right: 24px;
      }
    }
  }
`

export { NavbarStyle }
