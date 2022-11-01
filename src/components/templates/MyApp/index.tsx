import { useMyApp } from './logic'
import { IGlobalContext, IMyAppProps } from './types'

import Feedback from 'components/molecules/Feedback'

import GlobalProvider from 'components/providers/GlobalProvider'

import Head from 'next/head'
import { createContext } from 'react'

export const GlobalContext = createContext<IGlobalContext>({
  feedback: {}
})

const MyApp = ({ Component, pageProps }: IMyAppProps) => {
  const { contextValue, getLayout, feedbackRef } = useMyApp({ Component })

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>

      <GlobalProvider>
        <div id='modal'></div>

        <Feedback ref={feedbackRef} />

        <GlobalContext.Provider value={contextValue}>
          {getLayout(<Component {...pageProps} />)}
        </GlobalContext.Provider>
      </GlobalProvider>
    </>
  )
}

export default MyApp
