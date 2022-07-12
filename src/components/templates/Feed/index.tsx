import { FeedContext, useFeed } from './logic'
import { FeedStyle } from './styles'

import { Resizable } from 'components/atoms/Resizable'

import LeftSide from 'components/organisms/LeftSide'
import Posts from 'components/organisms/Posts'
import RightSide from 'components/organisms/RightSide'

import { TNextPageWithLayout } from 'typescript/next.types'

import Head from 'next/head'

const Feed: TNextPageWithLayout = () => {
  const { showLeftSide, contextValue, maxSize } = useFeed()

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

        <FeedContext.Provider value={contextValue}>
          {showLeftSide && <LeftSide />}

          <Resizable
            minWidth={300}
            maxWidth={maxSize}
            initialWidth={globalThis.innerHeight * 0.7}
          >
            <Posts />
          </Resizable>

          <RightSide />
        </FeedContext.Provider>
      </FeedStyle>
    </>
  )
}

export default Feed
