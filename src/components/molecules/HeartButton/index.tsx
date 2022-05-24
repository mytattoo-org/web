import { HeartButtonStyle } from './styles'
import type { IHeartButtonProps } from './types'

import Heart from 'components/atoms/Icon/icons/Heart'

import composeClassName from 'utils/composeClassName'

const HeartButton = ({
  liked,
  className,
  type = 'button',
  ...props
}: IHeartButtonProps) => {
  return (
    <HeartButtonStyle
      type={type}
      className={composeClassName('HeartButton', className)}
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
