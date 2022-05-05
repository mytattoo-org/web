import GlobalProvider from 'components/providers/GlobalProvider'

import 'styles/bootstrap.scss'

import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>

    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  </>
)

export default MyApp
