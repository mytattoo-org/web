/* eslint-disable @next/next/no-page-custom-font */
const Fonts = () => (
  <>
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link rel='preconnect' href='https://fonts.gstatic.com' />
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
    />
  </>
)

const OG = () => (
  <>
    <meta property='og:type' content='website' />
    <meta property='og:title' content='MySocial' />
    <meta property='og:site_name' content='MySocial' />
    <meta property='og:description' content='Sua rede social' />
    <meta property='og:url' content='https://mytattoo.vercel.app/' />
  </>
)

const TwitterOG = () => (
  <>
    <meta name='twitter:card' content='summary' />
    <meta name='twitter:title' content='MySocial' />
    <meta name='twitter:creator' content='@InSTinToS123' />
    <meta name='twitter:url' content='https://mytattoo.vercel.app/' />
    <meta name='twitter:description' content='Best PWA App in the world' />
    <meta
      name='twitter:image'
      content='https://mytattoo.vercel.app/icons/android-chrome-192x192.png'
    />
    <meta
      property='og:image'
      content='https://mytattoo.vercel.app/icons/apple-touch-icon.png'
    />
  </>
)

const PWA = () => (
  <>
    <link rel='manifest' href='/manifest.json' />
    <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#090909' />

    <meta name='theme-color' content='#090909' />
    <meta name='mobile-web-app-capable' content='yes' />
    <meta name='format-detection' content='telephone=no' />

    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-title' content='MySocial' />
    <meta name='apple-mobile-web-app-status-bar-style' content='default' />

    <meta name='msapplication-tap-highlight' content='no' />
    <meta name='msapplication-TileColor' content='#090909' />
    <meta name='msapplication-config' content='/icons/browserconfig.xml' />

    {/* Apple Icon */}
    <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
    <link
      rel='apple-touch-icon'
      sizes='152x152'
      href='/icons/touch-icon-ipad.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='180x180'
      href='/icons/touch-icon-iphone-retina.png'
    />
    <link
      rel='apple-touch-icon'
      sizes='167x167'
      href='/icons/touch-icon-ipad-retina.png'
    />
    <link
      rel='icon'
      type='image/png'
      sizes='32x32'
      href='/icons/favicon-32x32.png'
    />

    {/* Apple Splash */}

    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_2048.png'
      sizes='2048x2732'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_1668.png'
      sizes='1668x2224'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_1536.png'
      sizes='1536x2048'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_1125.png'
      sizes='1125x2436'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_1242.png'
      sizes='1242x2208'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_750.png'
      sizes='750x1334'
    />
    <link
      rel='apple-touch-startup-image'
      href='/images/apple_splash_640.png'
      sizes='640x1136'
    />
  </>
)

export const MainHead = () => (
  <>
    <OG />
    <PWA />
    <Fonts />
    <TwitterOG />

    <meta charSet='UTF-8' />
    <meta name='application-name' content='MySocial' />
    <meta name='author' content='Miguel Andrade Barreto' />
    <meta name='keywords' content='MySocial, Rede social' />
    <meta name='description' content='Rede social com filtros incríveis' />

    <link rel='icon' type='image/x-icon' href='/favicon.ico' />
  </>
)
