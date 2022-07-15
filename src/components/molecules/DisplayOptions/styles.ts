import styled from 'styled-components'

const DisplayOptionsStyle = styled.ul`
  display: flex;

  width: 100%;

  input {
    position: absolute;

    width: 0;
    height: 0;
    opacity: 0;
  }

  li {
    &,
    & label {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & + li {
      margin-left: 8px;
    }

    .Icon {
      width: 24px;
      height: 24px;
      padding: 1px 0;
      transition: transform 0.3s ease-in-out;

      fill: ${({ theme }) => theme.colors.secondary};

      :hover {
        transform: scale(1.1);
      }
    }
  }

  .feedOrientation {
    display: none;
    margin-left: 0px;

    .Icon {
      padding: 0px;
    }
  }

  .shortcut {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
  }

  @media screen and (min-width: 1080px) {
    .feedOrientation {
      display: block;
    }
  }
`

export { DisplayOptionsStyle }
