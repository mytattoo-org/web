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
        <title>MyTattoo - Postagens</title>
      </Head>

      <FeedStyle>
        <ul id='shortcuts' aria-label='Atalhos'>
          <li>
            <a href='#main' target='_self'>
              Postagens
            </a>
          </li>

          <li>
            <a href='#createPost' target='_self'>
              Criar postagem
            </a>
          </li>

          <li>
            <a href='#leftSide' target='_self'>
              Filtros de postagens
            </a>
          </li>

          <li>
            <a href='#rightSide' target='_self'>
              Sugestões
            </a>
          </li>

          <li>
            <a href='#nav' target='_self'>
              Navegação
            </a>
          </li>
        </ul>

        {showFilters && <LeftSide />}

        <Posts />

        {showSuggestions && <RightSide />}
      </FeedStyle>
    </>
  )
}

export default Feed
