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
        <a href='#main'>Pular para postagens</a>
        <a href='#leftSide'>Pular para editar filtros de postagens</a>
        <a href='#rightSide'>Pular para sugestões</a>
        <a href='#nav'>Pular para navegação</a>

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
