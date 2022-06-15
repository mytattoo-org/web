import { FeedContext, useFeed } from './logic'
import { FeedStyle } from './styles'

import Feedback from 'components/molecules/Feedback'

import AuthModal from 'components/organisms/AuthModal'
import LeftSide from 'components/organisms/LeftSide'
import Navbar from 'components/organisms/Navbar'
import Posts from 'components/organisms/Posts'
import RightSide from 'components/organisms/RightSide'

import Head from 'next/head'

const Feed = () => {
  const { showLeftSide, showAuthModal, contextValue, feedback } = useFeed()

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
          <Navbar />

          {showLeftSide && <LeftSide />}

          <Posts />

          <RightSide />

          {showAuthModal.open && <AuthModal />}

          {feedback.open && (
            <Feedback
              color={feedback.props?.color}
              title={feedback.props?.title}
              content={feedback.props?.content}
            />
          )}
        </FeedContext.Provider>
      </FeedStyle>
    </>
  )
}

export default Feed
