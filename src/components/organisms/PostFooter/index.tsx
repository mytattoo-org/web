import { usePostFooter } from './logic'
import { PostFooterStyle } from './styles'

import Presence from 'components/atoms/Presence'

import PostActions from 'components/molecules/PostActions'
import Styles from 'components/molecules/Styles'

import Comments from 'components/organisms/Comments'

const PostFooter = () => {
  const {
    comments,
    commenting,
    onBalloonClick,
    onHashtagClick,
    showingStyles
  } = usePostFooter()

  return (
    <PostFooterStyle>
      <PostActions
        commenting={commenting}
        showingStyles={showingStyles}
        onHashtagClick={onHashtagClick}
        onBalloonClick={onBalloonClick}
      />

      <Styles showingStyles={showingStyles} />

      <Presence condition={commenting}>
        <Comments comments={comments} />
      </Presence>
    </PostFooterStyle>
  )
}

export default PostFooter
