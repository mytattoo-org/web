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
          outlined={!commenting}
          onClick={onBalloonClick}
          icon={<Balloon aria-live='polite' />}
          ariaLabel='Esconder comentários da postagem'
          outlinedAriaLabel='Mostrar comentários da postagem'
          outlinedIcon={<OutlinedBalloon aria-live='polite' />}
        />
      </li>

      <li>
        <IconButton
          className='tattooButton'
          onClick={onTattooClick}
          outlined={!showingStyles}
          icon={<Tattoo aria-live='polite' />}
          outlinedIcon={<OutlinedTattoo aria-live='polite' />}
          ariaLabel='Esconder estilos de tatuagens da postagem'
          outlinedAriaLabel='Mostrar estilos de tatuagens da postagem'
        />
      </li>
    </PostActionsStyle>
  )
}

export default PostActions
