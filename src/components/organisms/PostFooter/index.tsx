import { usePostFooter } from './logic'
import { PostFooterStyle } from './styles'

import Presence from 'components/atoms/Presence'

import PostActions from 'components/molecules/PostActions'
import Styles from 'components/molecules/Styles'

import Comments from 'components/organisms/Comments'

const PostFooter = () => {
  const { commenting, onBalloonClick, onTattooClick, showingStyles } =
    usePostFooter()

  return (
    <PostFooterStyle>
      <PostActions
        commenting={commenting}
        showingStyles={showingStyles}
        onTattooClick={onTattooClick}
        onBalloonClick={onBalloonClick}
      />

      <Styles showingStyles={showingStyles} />

      <Presence condition={commenting}>
        <Comments />
      </Presence>
    </PostFooterStyle>
  )
}

export default PostFooter
