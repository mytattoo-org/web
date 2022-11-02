import Modal from 'components/molecules/Modal'

import styled from 'styled-components'

const PasswordModal = styled(Modal)`
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 400px;
    padding: 24px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.background};

    .Field {
      width: 100%;
    }
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
  padding: 78px 0 62px 0;

  section {
    padding: 48px 0;

    &,
    form {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      > div {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
    }

    form {
      .Switch {
        margin-top: 24px;
      }

      .TextareaField {
        width: 100%;
        padding: 8px;
        margin: 24px 0;

        textarea {
          min-width: 300px;
          min-height: 50px;
          max-height: 300px;
        }
      }

      .Field {
        width: 100%;
        min-width: 300px;
        margin-top: 24px;

        border: solid ${({ theme }) => theme.colors.secondary} 1px solid;

        .Input {
          text-align: center;
        }
      }

      .Field,
      .bioTextareaField {
        .Tooltip {
          .TooltipArrow {
            left: 4px;
          }
        }
      }

      #sad {
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

      #changeAvatar {
        width: 180px;
        height: 180px;

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
  }

  footer {
    position: fixed;
    bottom: 0;

    button {
      justify-content: center;

      padding: 16px;
      margin-top: 0px;
      min-width: 100vw;

      color: ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.green};
    }
  }

  @media screen and (min-width: 1080px) {
    height: 100vh;

    section {
      padding: 0px;
      height: 100%;

      form {
        flex-direction: row;
        justify-content: space-evenly;

        width: 100%;
      }
    }
  }
`

export { EditProfileStyle, PasswordModal }
