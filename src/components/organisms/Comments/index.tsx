import { useComments } from './logic'
import {
  CommentsList,
  CommentsStyle,
  CreateCommentStyle,
  NewComment
} from './styles'
import { ICommentsProps } from './types'

import { commentsAnimations, liVariants, ulAnimationProps } from './animations'

import Send from 'components/atoms/Icon/icons/Send'
import Input from 'components/atoms/Input'

import Comment from 'components/molecules/Comment'
import IconButton from 'components/molecules/IconButton'

const Comments = ({ comments }: ICommentsProps) => {
  const { formik } = useComments()

  return (
    <CommentsStyle {...commentsAnimations}>
      <CommentsList aria-label='Comentários' {...ulAnimationProps}>
        {comments?.map(({ author, content, id }) => (
          <Comment
            key={id}
            tabIndex={0}
            forwardedAs='li'
            content={content}
            variants={liVariants}
            name={author.username}
            avatar={author.avatar}
          />
        ))}
      </CommentsList>

      <CreateCommentStyle onSubmit={formik.handleSubmit}>
        <NewComment htmlFor='newComment'>
          <Input
            type='text'
            id='newComment'
            name='newComment'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.newComment}
            placeholder='Deixe um comentário!'
          />

          <IconButton type='submit' icon={<Send />} />
        </NewComment>
      </CreateCommentStyle>
    </CommentsStyle>
  )
}

export default Comments
