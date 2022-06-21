import { TestsStyle } from './styles'
import type { ITestsProps } from './types'

import Comment from 'components/molecules/Comment'

import avatar from '@public/temp/avatar.png'

const Tests = (props: ITestsProps) => {
  return (
    <TestsStyle {...props}>
      <Comment
        isArtist
        avatar={avatar}
        name='Miguel Andrade'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime, eaque accusamus repellat nemo alias dignissimos fugiat aperiam doloremque vero repudiandae ipsum neque? Consectetur tenetur soluta inventore fuga voluptas consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime, eaque accusamus repellat nemo alias dignissimos fugiat aperiam doloremque vero repudiandae ipsum neque? Consectetur tenetur soluta inventore fuga voluptas consequatur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime, eaque accusamus repellat nemo alias dignissimos fugiat aperiam doloremque vero repudiandae ipsum neque? Consectetur tenetur soluta inventore fuga voluptas consequatur?'
      />
    </TestsStyle>
  )
}

export default Tests
