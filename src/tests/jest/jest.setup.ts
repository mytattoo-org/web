import '@testing-library/jest-dom'

// All code below is for suppress Warning:
// ReactDOM.render is no longer supported in React 18.

const originalError = console.error

beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning: ReactDOM.render is no longer supported in React 18./.test(
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
