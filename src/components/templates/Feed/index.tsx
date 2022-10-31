import { useFeed } from './logic'
import { FeedStyle } from './styles'

import LeftSide from 'components/organisms/LeftSide'
import Posts from 'components/organisms/Posts'
import RightSide from 'components/organisms/RightSide'

import { TNextPageWithLayout } from 'typescript/next.types'

import Head from 'next/head'

const Feed: TNextPageWithLayout = () => {
  const { showFilters, showSuggestions } = useFeed()

  return (
    <>
      <Head>
        <title>MySocial - Postagens</title>
      </Head>

      <FeedStyle>
        {showFilters && <LeftSide />}

        <Posts />

        {showSuggestions && <RightSide />}
      </FeedStyle>
    </>
  )
}

export default Feed
