import type { IFeedbackStyleProps } from './types'

import styled, { css } from 'styled-components'

const FeedbackStyle = styled.div<IFeedbackStyleProps>`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 20;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 16px;
  max-width: 240px;
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.secondary};
  border: solid 1px ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.background};

  .title {
    width: 100%;
    margin-bottom: 16px;
    padding-bottom: 16px;

    font-weight: bold;
    text-align: center;

    border-bottom: solid 1px ${({ theme }) => theme.colors.secondary};

    ${({ color }) =>
      color &&
      css`
        color: ${color};
      `};
  }

  .content {
    width: 100%;

    word-wrap: break-word;
  }
`

export { FeedbackStyle }
