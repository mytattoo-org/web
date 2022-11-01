import GlobalProvider from 'components/providers/GlobalProvider'

import 'styles/bootstrap.scss'

import type { TAppPropsWithLayout } from 'typescript/next.types'

import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: TAppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page)

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

        <div id='popup'></div>

        {getLayout(<Component {...pageProps} />)}
      </GlobalProvider>
    </>
  )
}

export default MyApp
