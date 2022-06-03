import composeClassName from './index'

describe('composeClassName', () => {
  it('should be able to compose className correctly', () => {
    const composed = composeClassName('Test', 'ClassName')

    expect(composed).toBe('Test ClassName')
  })

  it('should be able to compose className correctly if is second param is undefined', () => {
    const composed = composeClassName('Test', undefined)

    expect(composed).toBe('Test')
  })
})
