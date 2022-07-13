import { ISidebarProps } from './types'

import { motion } from 'framer-motion'
import styled from 'styled-components'

const AvatarLi = styled.li<ISidebarProps>`
  button {
    position: relative;
    z-index: 1;

    .Avatar {
      transform: ${({ showSidebar }) => `scale(${showSidebar ? 1.2 : 1})`};
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
      }
    }

    & + button {
      position: absolute;
      bottom: 0;

      .Icon.Logout {
        height: 16px;

        fill: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`

const Navbar = styled.ul`
  display: flex;

  .ListItem {
    display: flex;

    margin-right: 16px;

    .Icon {
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`

const Sidebar = styled(motion.ul)`
  position: fixed;
  top: 0px;
  right: 0px;

  padding-top: 78px;
  border-radius: 8px;

  .ListItem {
    &:hover {
      transition: all 0.3s ease-in-out;

      button .Icon {
        transform: scale(1.1);
        transition: all 0.3s ease-in-out;
      }

      hr {
        width: 100%;

        opacity: 1;
        transition: all 0.3s ease-in-out;

        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      padding: 16px 32px;

      cursor: pointer;

      div {
        text-align: left;
        white-space: nowrap;

        color: ${({ theme }) => theme.colors.secondary};
      }

      .Icon {
        height: 20px;
      }
    }

    hr {
      width: 0;
      opacity: 0;
      height: 2px;
      border: none;
    }
  }
`

const ProfileOptionsStyle = styled.div`
  position: absolute;
  right: 32px;

  .Icon {
    height: 18px;

    fill: ${({ theme }) => theme.colors.secondary};

    &.Heart {
      fill: ${({ theme }) => theme.colors.red};
    }
  }
`

export { Navbar, Sidebar, ProfileOptionsStyle, AvatarLi }
