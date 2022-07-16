import type { ICreatePostStyleProps } from './types'

import Button from 'components/molecules/Button'

import { transparentize } from 'polished'
import styled from 'styled-components'

const ShareButton = styled(Button)`
  padding: 4px 16px;

  border: solid 1px ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => transparentize(0.6, theme.colors.primary)};
`

const AddLabel = styled.label`
  display: flex;

  border: none;
  background-color: transparent;

  span {
    display: none;
  }

  .Icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;

    fill: ${({ theme }) => theme.colors.secondary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    .Icon {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  @media screen and (min-width: 528px) {
    span {
      display: block;
    }
  }
`

const CreatePostStyle = styled.form<ICreatePostStyleProps>`
  width: 100%;
  padding: 16px;
  border-radius: 8px;

  border: solid 1px ${({ theme }) => theme.colors.secondary};

  #image {
    margin-bottom: 16px;
  }

  .TextareaField {
    width: 100%;
    border: none;
    height: 100px;
    margin-bottom: 16px;

    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondary};

    textarea {
      resize: none;
    }
  }

  footer {
    width: 100%;

    ul {
      display: flex;

      align-items: center;
      justify-content: flex-end;

      li + li {
        margin-left: 8px;
      }
    }
  }
`

export { CreatePostStyle, ShareButton, AddLabel }
