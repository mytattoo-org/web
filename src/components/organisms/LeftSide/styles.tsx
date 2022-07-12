import type { ILeftSideStyleProps } from './types'

import styled from 'styled-components'

const LeftSideStyle = styled.aside<ILeftSideStyleProps>`
  left: 0;

  flex-flow: column nowrap;

  height: calc(100vh - 78px);

  header {
    padding: 0 24px;
    padding-right: 0px;

    input {
      height: 100%;
    }

    label {
      display: flex;
      flex: 1;

      padding: 8px;
      border-radius: 8px;

      border: solid 1px ${({ theme }) => theme.colors.secondary};

      .Search {
        width: 18px;
        height: 18px;

        path {
          fill: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }

  ul#filters {
    display: flex;
    flex: 1;
    flex-flow: column nowrap;

    padding: 12px;

    > li {
      &#filtersToAdd {
        flex: 1;
      }

      &#addedFilters .Button {
        border: solid 1px ${({ theme }) => theme.colors.green};
        background-color: ${({ theme }) => theme.colors.green};
      }

      &#removedFilters .Button {
        border: solid 1px ${({ theme }) => theme.colors.red};
        background-color: ${({ theme }) => theme.colors.red};
      }

      ul {
        display: flex;
        flex-flow: row wrap;

        width: 100%;

        background-color: ${({ theme }) => theme.colors.background};

        li {
          cursor: pointer;
          padding: 8px 12px;

          .Icon {
            width: 12px;
            height: 12px;

            path {
              fill: ${({ theme }) => theme.colors.secondary};
            }
          }
        }
      }
    }
  }
`
export { LeftSideStyle }
