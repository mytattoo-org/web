import { usePostActions } from './logic'
import { Hashtag, OutlinedHashtag, PostActionsStyle } from './styles'
import type { IPostActionsProps } from './types'

import HeartButton from '../HeartButton'
import IconButton from '../IconButton'

import Balloon from 'components/atoms/Icon/icons/Balloon'
import OutlinedBalloon from 'components/atoms/Icon/icons/OutlinedBalloon'

const PostActions = ({
  commenting,
  showingStyles,
  onHashtagClick,
  onBalloonClick
}: IPostActionsProps) => {
  const { liked, onHeartClick } = usePostActions()

  return (
    <PostActionsStyle>
      <li>
        <HeartButton liked={liked} onClick={onHeartClick} />
      </li>

      <li>
        <IconButton
          aria-haspopup='menu'
          outlined={!commenting}
          onClick={onBalloonClick}
          aria-expanded={commenting}
          ariaLabel='Esconder comentários'
          icon={<Balloon aria-live='polite' />}
          outlinedAriaLabel='Mostrar comentários'
          outlinedIcon={<OutlinedBalloon aria-live='polite' />}
        />
      </li>

      <li>
        <IconButton
          aria-haspopup='menu'
          onClick={onHashtagClick}
          className='HashtagButton'
          outlined={!showingStyles}
          aria-expanded={showingStyles}
          icon={<Hashtag aria-live='polite' />}
          ariaLabel='Esconder estilos de tatuagens'
          outlinedAriaLabel='Mostrar estilos de tatuagens'
          outlinedIcon={<OutlinedHashtag aria-live='polite' />}
        />
      </li>
    </PostActionsStyle>
  )
}

export default PostActions
