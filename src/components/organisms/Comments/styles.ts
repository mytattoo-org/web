import styled from 'styled-components'

const CreateCommentStyle = styled.form`
  label {
    width: 100%;
    border-radius: 4px;

    padding: 8px;
    border: solid ${({ theme }) => theme.colors.secondary} 1px;
  }
`

const CommentsStyle = styled.ul`
  margin: 16px 0;

  li {
    margin-bottom: 24px;
  }
`

export { CommentsStyle, CreateCommentStyle }
