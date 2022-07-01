import Modal from 'components/molecules/Modal'

import styled from 'styled-components'

const PasswordModal = styled(Modal)`
  display: flex;
  flex-direction: column;

  section {
    width: 400px;
    padding: 24px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.background};
  }

  .Button {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 40px;
    margin-top: 24px;
  }
`

const EditProfileStyle = styled.main`
  height: 100vh;
  padding: 78px 0 65px 0;

  display: flex;
  flex-direction: row;

  font-size: ${({ theme }) => theme.fonts.sizes.lg};

  header {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    label {
      position: relative;

      .AddPhoto {
        position: absolute;
        right: 0px;
        bottom: 0px;

        width: 32px;
        padding: 2px;

        path {
          fill: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
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

  .Field {
    width: 100%;
    border: none;

    .Input {
      text-align: center;
    }
  }

  .TextareaField {
    width: 100%;
    padding: 8px;

    textarea {
      max-height: 300px;
      min-height: ${({ theme }) => `calc(${theme.fonts.sizes.lg} + 12px)`};
    }
  }

  button,
  .Field,
  .TextareaField,
  .Switch {
    margin-top: 24px;
  }

  @media screen and (min-width: 1080px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export { EditProfileStyle, PasswordModal }
