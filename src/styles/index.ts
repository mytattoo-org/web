import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  html {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;

    body {
      font-size: ${({ theme }) => theme.fonts.sizes.md};

      color: ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.background};

      a {
        text-decoration: none;

        color: ${({ theme }) => theme.colors.secondary};
      }

      li {
        list-style-type: none;
      }

      button {
        cursor: pointer;

        border: none;
        background-color: transparent;
        outline: 1px red 1px;
      }

      input[type="checkbox"] {
        &, &:focus, &:hover {
          box-shadow: initial;
        }
      }
    }
  }


`
