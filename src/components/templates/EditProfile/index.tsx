import { EditProfileStyle } from './styles'
import type { IEditProfileProps } from './types'

import Navbar from 'components/organisms/Navbar'

import { TNextPageWithLayout } from 'typescript/next.types'

const EditProfile: TNextPageWithLayout = (props: IEditProfileProps) => {
  return (
    <EditProfileStyle>
      <Navbar />
    </EditProfileStyle>
  )
}

export default EditProfile
