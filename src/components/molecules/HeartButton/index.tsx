import { HeartButtonStyle } from './styles'
import type { IHeartButtonProps } from './types'

import Heart from 'components/atoms/Icon/icons/Heart'

const HeartButton = ({
  liked,
  type = 'button',
  ...props
}: IHeartButtonProps) => {
  return (
    <HeartButtonStyle
      type={type}
      aria-label={`${liked ? 'Descurtir' : 'Curtir'} postagem`}
      {...props}
    >
      {liked ? (
        <Heart className='liked' aria-live='polite' />
      ) : (
        <Heart aria-live='polite' />
      )}
    </HeartButtonStyle>
  )
}

export default HeartButton
