import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

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
        outline: 1px red 1px;
        background-color: transparent;
      }

      input[type="checkbox"] {
        &, &:focus, &:hover {
          box-shadow: initial;
        }
      }

      ::-webkit-scrollbar {
        width: 16px;
      }

      ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.background};
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: ${({ theme }) => theme.colors.primary};
        border: solid 4px ${({ theme }) => theme.colors.background};
      }
    }
  }
`
