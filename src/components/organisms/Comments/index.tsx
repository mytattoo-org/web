import { useComments } from './logic'
import { CommentsStyle, CreateCommentStyle } from './styles'

import Input from 'components/atoms/Input'

import Comment from 'components/molecules/Comment'

import avatar2 from '@public/avatar2.jpg'
import avatar from '@public/avatar.png'

import { memo } from 'react'

const fakeComments = [
  {
    id: '1',
    name: 'Miguel Andrade',
    avatar,
    isArtist: false,
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicingelit. Ipsam minus consequatur sit iste odit itaque accusamus. Blanditiisperferendis natus, eveniet est, architecto numquam accusamus, iste sitquidem enim atque ad?'
  },
  {
    id: '2',
    name: 'Vitor Daniel',
    avatar: avatar2,
    isArtist: true,
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus harum nesciunt provident accusantium ullam, sint, quisquam in corporis dolorum soluta eum mollitia architecto ex vel perferendis, consequuntur ipsam aperiam delectus.'
  }
]

const Comments = () => {
  const { formik } = useComments()

  return (
    <>
      <CommentsStyle aria-label='Comentários'>
        {fakeComments.map(({ name, content, id, avatar, isArtist }) => (
          <Comment
            key={id}
            name={name}
            tabIndex={0}
            avatar={avatar}
            forwardedAs='li'
            content={content}
            isArtist={isArtist}
          />
        ))}
      </CommentsStyle>

      <CreateCommentStyle onSubmit={formik.handleSubmit}>
        <label htmlFor='newComment'>
          <Input
            id='newComment'
            type='text'
            name='newComment'
            placeholder='Deixe um comentário!'
          />
        </label>
      </CreateCommentStyle>
    </>
  )
}

export default memo(Comments)
