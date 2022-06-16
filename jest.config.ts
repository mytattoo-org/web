import type { Config } from '@jest/types'

const jestConfig: Config.InitialOptions = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['node_modules', '<rootDir>'],
  coverageReporters: ['text-summary', 'lcov'],
  testPathIgnorePatterns: ['<rootDir>/src/tests'],
  coverageDirectory: '<rootDir>/src/tests/jest/coverage',
  setupFilesAfterEnv: ['<rootDir>/src/tests/jest/jest.setup.ts'],
  testMatch: ['<rootDir>/src/**/*spec.ts', '<rootDir>/src/**/*spec.tsx'],
  coveragePathIgnorePatterns: [
    'styles.ts',
    '.types.ts',
    '.stories.ts',
    '.stories.tsx',
    '<rootDir>/src/tests',
    '<rootDir>/src/styles',
    '<rootDir>/src/components/atoms/Icon/icons'
  ]
}

export default jestConfig
