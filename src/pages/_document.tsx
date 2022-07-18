import favicon from '@public/favicon.ico'

import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ]
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='pt-br'>
        <Head>
          <link rel='icon' href={favicon} />

          <link rel='preconnect' href='https://fonts.googleapis.com' />

          <link rel='preconnect' href='https://fonts.gstatic.com' />

          <link
            href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
            rel='stylesheet'
          />

          <meta charSet='utf-8' />
          <meta name='application-name' content='MyTattoo' />
          <meta charSet='UTF-8' />
          <meta name='author' content='Miguel Andrade Barreto' />
          <meta
            name='keywords'
            content='MyTattoo, Tatuagens, Tatuadores, Rede social'
          />
          <meta
            name='description'
            content='Rede social para pessoas que gostam de tatuagens'
          />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
