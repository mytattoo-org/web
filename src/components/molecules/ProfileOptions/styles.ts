import styled from 'styled-components'

const ProfileOptionsStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  padding-right: 24px;

  li {
    :not(:last-child) {
      display: none;
    }

    .Icon {
      width: 25px;
      height: 25px;

      &.Heart path {
        fill: ${({ theme }) => theme.colors.red};
      }

      &.ArtistHeart {
        path {
          fill: ${({ theme }) => theme.colors.secondary};
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
