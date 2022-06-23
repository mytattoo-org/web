import { RightSideStyle } from './styles'
import type { IRightSideProps } from './types'

import Recommendations from 'components/organisms/Recommendations'

const RightSide = (props: IRightSideProps) => (
  <RightSideStyle id='rightSide' {...props}>
    <a href='#shortcuts' target='_self'>
      Voltar para atalhos
    </a>

    <Recommendations title='Sugestões' startOpen />

    <Recommendations title='Em alta' />
  </RightSideStyle>
)

export default RightSide
