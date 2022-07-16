import Feed from 'components/templates/Feed'

import NavbarLayout from 'components/layouts/NavbarLayout'
import type { ReactElement } from 'react'

Feed.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>

export default Feed
