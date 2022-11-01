const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true
  },
  images: { disableStaticImages: true }
}

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  sw: '/serviceWorker.js'
  // disable: process.env.NODE_ENV !== 'production'
})

module.exports = withPWA(nextConfig)
