import '@testing-library/jest-dom'

// All code below is for suppress warnings:
// ReactDOM.render is no longer supported in React 18.
// The current testing environment is not configured to support act(...)

const originalError = console.error

Object.defineProperty(window, 'scrollTo', {
  value: () => {},
  writable: true
})

beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning: ReactDOM.render is no longer supported in React 18./.test(
        args[0]
      ) ||
      /Warning: The current testing environment is not configured to support act(...)/.test(
        args[0]
      )
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
