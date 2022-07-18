import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'swxyj4',
  video: true,
  viewportWidth: 1080,
  viewportHeight: 720,
  env: { api: 'http://localhost:3001' },
  videosFolder: './src/tests/cypress/videos',
  fixturesFolder: './src/tests/cypress/fixtures',
  downloadsFolder: './src/tests/cypress/downloads',
  screenshotsFolder: './src/tests/cypress/screenshots',
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: './src/tests/cypress/support/index.ts',
    specPattern: './src/tests/cypress/e2e/**/*.{ts, tsx, js, jsx}'
  },
  component: { devServer: { framework: 'next', bundler: 'webpack' } }
})
