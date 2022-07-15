import styled from 'styled-components'

const NavbarStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;

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
        padding-left: 16px;
      }

      &:nth-child(2) {
        width: 100%;
        padding: 0 16px;
      }

      &:last-child {
        padding-right: 16px;
      }
    }
  }

  @media screen and (min-width: 1080px) {
    > ul > li {
      min-width: 300px;

      &:first-child {
        padding-left: 24px;
      }

      &:nth-child(2) {
        max-width: 644px;
        margin-left: 40px;
        padding: 0px;
      }

      &:last-child {
        padding-right: 24px;
      }
    }
  }
`

export { NavbarStyle }
