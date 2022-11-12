import { usePost } from './logic'

import type { TReadCommentsResponse } from '../../../../submodules/common/src/types/comments/useCases/readComments.types'
import type { IFeed } from '../../../../submodules/common/src/types/posts/models/feedModel.types'
import { IAxiosMockedResponse } from '../../../typescript/jest.types'
import GlobalProvider from '../../providers/GlobalProvider'

import Post from '.'
import {
  act,
  render,
  renderHook,
  screen,
  waitFor
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import axios from 'axios'
import { debug } from 'jest-preview'

jest.mock('axios', () => ({
  ...jest.requireActual('axios'),
  get: jest.fn()
}))

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Post', () => {
  it('should be able to render Post', () => {
    const postData: IFeed = {
      author: {
        avatar: '/avatar.test',
        id: '1',
        username: 'InSTinToS'
      },
      id: '1',
      image: '/image.test',
      created_at: new Date().toISOString(),
      description: 'This is a cool Post!',
      liked: false
    }

    render(
      <GlobalProvider>
        <Post postData={postData} />
      </GlobalProvider>
    )

    expect(screen.getByRole('article')).toBeInTheDocument()
    expect(screen.getByText(postData.description)).toBeInTheDocument()
    expect(screen.getByText(postData.author.username)).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Curtir postagem' })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Mostrar comentários' })
    ).toBeInTheDocument()
  })

  it('should be able to render Comments', async () => {
    const postData: IFeed = {
      id: '1',
      liked: false,
      image: '/image.test',
      created_at: new Date().toISOString(),
      description: 'This is a cool Post!',
      author: { id: '1', avatar: '/avatar.test', username: 'InSTinToS' }
    }

    mockedAxios.get.mockResolvedValue({
      data: {
        comments: [
          {
            id: '1',
            post_id: '1',
            content: 'This is a cool Comment',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            author: { id: '2', avatar: '/avatar.test', username: 'InSTinToS2' }
          }
        ]
      }
    } as IAxiosMockedResponse<TReadCommentsResponse>)

    const { rerender } = render(
      <GlobalProvider>
        <Post postData={postData} />
      </GlobalProvider>
    )

    await act(
      async () =>
        await userEvent.click(
          screen.getByRole('button', { name: 'Mostrar comentários' })
        )
    )

    expect(mockedAxios.get).toHaveBeenCalledTimes(1)

    rerender(
      <GlobalProvider>
        <Post postData={postData} />
      </GlobalProvider>
    )

    debug()

    expect(screen.getByText('This is a cool Comment')).toBeInTheDocument()
  })
})
