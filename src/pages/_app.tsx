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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <GlobalProvider>{getLayout(<Component {...pageProps} />)}</GlobalProvider>
    </>
  )
}

export default MyApp
