import useWindowSize from './index'

import { act, renderHook } from '@testing-library/react-hooks'

describe('Field', () => {
  it('should be able to render', () => {
    const { result } = renderHook(() => useWindowSize())

    const expectedInitial = { innerHeight: 768, innerWidth: 1024 }

    expect(result.current).toStrictEqual(expectedInitial)
  })

  it('should be able to change return values when window resizes', () => {
    const { result, rerender } = renderHook(() => useWindowSize())

    const expectedOutput = { innerHeight: 500, innerWidth: 500 }

    globalThis.innerWidth = 500
    globalThis.innerHeight = 500

    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    expect(result.current).toStrictEqual(expectedOutput)
  })
})
