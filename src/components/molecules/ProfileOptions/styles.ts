import { ISidebarProps } from './types'

import { motion } from 'framer-motion'
import styled from 'styled-components'

const Sidebar = styled(motion.ul)`
  position: fixed;
  top: 0px;
  right: 0px;

  padding-top: 78px;
  border-radius: 4px;
  padding-bottom: 16px;

  li button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 16px 32px;

    .Icon {
      display: flex;

      height: 22px;
    }

    span {
      text-align: left;

      white-space: nowrap;

      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`

const ProfileOptionsStyle = styled.ul<ISidebarProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;

  > li {
    position: relative;

    &:not(:last-child) {
      width: 24px;
    }
  }

  .Icon {
    height: 18px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    &.Heart {
      path {
        fill: ${({ theme }) => theme.colors.red};
      }
    }

    &.ArtistHeart {
      path {
        fill: ${({ theme }) => theme.colors.secondary};

        & + path {
          fill: ${({ theme }) => theme.colors.red};
        }
      }
    }

    &.EditProfile path {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }

  #avatar {
    position: relative;

    background-color: ${({ theme }) => theme.colors.background};

    button {
      position: relative;
      z-index: 1;

      .Avatar {
        transform: ${({ showSidebar }) => `scale(${showSidebar ? 1.2 : 1.0})`};
        transition: all 0.3s ease-in-out;
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
  }

  @media screen and (min-width: 1080px) {
    > li {
      &:not(:last-child) {
        display: block;
      }

      & + li {
        margin-left: 16px;
      }
    }
  }
`

export { ProfileOptionsStyle, Sidebar }
