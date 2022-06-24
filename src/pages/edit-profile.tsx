import EditProfile from 'components/templates/EditProfile'

import NavbarLayout from 'components/layouts/NavbarLayout'
import type { ReactElement } from 'react'

EditProfile.getLayout = (page: ReactElement) => (
  <NavbarLayout>{page}</NavbarLayout>
)

export default EditProfile
