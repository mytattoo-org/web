import styled from 'styled-components'

const SearchStyle = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;
  margin-left: 40px;
  padding-right: 8px;
  border-radius: 16px;

  border: solid 1px ${({ theme }) => theme.colors.secondary};

  input:focus {
    border-radius: 8px;
    outline-offset: -6px;
  }

  .Input {
    width: 100%;
  }

  .Search {
    width: 20px;
    height: 20px;
    margin-left: 16px;

    path {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`

export { SearchStyle }
