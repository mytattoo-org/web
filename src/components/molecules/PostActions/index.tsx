import { usePostActions } from './logic'
import { PostActionsStyle } from './styles'
import type { IPostActionsProps } from './types'

import HeartButton from '../HeartButton'
import IconButton from '../IconButton'

import Balloon from 'components/atoms/Icon/icons/Balloon'
import OutlinedBalloon from 'components/atoms/Icon/icons/OutlinedBalloon'
import OutlinedTattoo from 'components/atoms/Icon/icons/OutlinedTattoo'
import Tattoo from 'components/atoms/Icon/icons/Tattoo'

const PostActions = ({
  commenting,
  onBalloonClick,
  showingStyles,
  onTattooClick
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
          ariaLabel='Esconder comentários'
          icon={<Balloon aria-live='polite' />}
          outlinedAriaLabel='Mostrar comentários'
          aria-expanded={commenting}
          outlinedIcon={<OutlinedBalloon aria-live='polite' />}
        />
      </li>

      <li>
        <IconButton
          aria-haspopup='menu'
          aria-expanded={showingStyles}
          className='tattooButton'
          onClick={onTattooClick}
          outlined={!showingStyles}
          icon={<Tattoo aria-live='polite' />}
          outlinedIcon={<OutlinedTattoo aria-live='polite' />}
          ariaLabel='Esconder estilos de tatuagens'
          outlinedAriaLabel='Mostrar estilos de tatuagens'
        />
      </li>
    </PostActionsStyle>
  )
}

export default PostActions
