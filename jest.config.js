process.env.IS_REACT_ACT_ENVIRONMENT = true

module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*'],
  coverageReporters: ['lcov', 'text'],
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/tests/cypress/'
  ]
}
