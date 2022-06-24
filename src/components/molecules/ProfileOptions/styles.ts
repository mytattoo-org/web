import styled from 'styled-components'

const ProfileOptionsStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;

  li {
    position: relative;
    z-index: 1;

    :not(:last-child) {
      display: none;
    }

    .Icon {
      height: 18px;
      transition: transform 0.3s ease-in-out;

      :hover {
        transform: scale(1.1);
      }

      &.Heart path {
        fill: ${({ theme }) => theme.colors.red};
      }

      &.ArtistHeart {
        path {
          fill: ${({ theme }) => theme.colors.secondary};

          & + path {
            fill: ${({ theme }) => theme.colors.red};
          }
        }
      }

      &.EditProfile {
        path {
          fill: ${({ theme }) => theme.colors.secondary};
        }
      }
    }

    &#avatar {
      position: relative;

      button + button {
        position: absolute;
        bottom: 0;
        z-index: 1;
        right: -16px;

        .Icon.Logout {
          height: 16px;

          path {
            fill: ${({ theme }) => theme.colors.secondary};
          }
        }
      }
    }
  }

  @media screen and (min-width: 1080px) {
    li {
      &:not(:last-child) {
        display: block;
      }

      & + li {
        margin-left: 16px;
      }
    }
  }
`
export { ProfileOptionsStyle }
