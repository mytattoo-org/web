import styled from 'styled-components'

const EditProfileStyle = styled.main`
  height: 100vh;
  padding: 78px 0 65px 0;

  font-size: ${({ theme }) => theme.fonts.sizes.lg};

  &,
  section,
  header {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 180px;
  }

  button {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.red};

    .Icon {
      height: 32px;
      margin-right: 16px;

      path {
        fill: ${({ theme }) => theme.colors.red};
      }
    }
  }

  footer {
    position: absolute;
    bottom: 0;

    button {
      justify-content: center;

      width: 100vw;
      padding: 16px;
      margin-top: 0px;

      color: ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.green};
    }
  }

  .Input {
    text-align: center;
  }

  .Input,
  button,
  #isArtistSwitch {
    margin-top: 24px;
  }

  #isArtistSwitch {
    display: flex;
    align-items: center;

    .Switch {
      margin-right: 16px;
    }
  }

  @media screen and (min-width: 1080px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`
export { EditProfileStyle }
