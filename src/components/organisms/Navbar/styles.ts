import styled from 'styled-components'

const Shortcuts = styled.ul`
  display: none;
`

const Content = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 0 16px;

  .Loading {
    width: 40px;
    height: 40px;
    fill: ${({ theme }) => theme.colors.secondary};
  }

  > li {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    height: 46px;

    &:nth-child(2) {
      width: 100%;
      padding: 0 16px;
    }
  }

  @media screen and (min-width: 1080px) {
    > li {
      min-width: 300px;

      &:first-child {
        padding-left: 24px;
      }

      &:nth-child(2) {
        max-width: 650px;
        padding: 0px;
      }

      &:last-child {
        padding-right: 24px;
      }
    }
  }
`

const NavbarStyle = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  display: flex;

  height: 78px;

  background-color: ${({ theme }) => theme.colors.background};
`

export { NavbarStyle, Shortcuts, Content }
