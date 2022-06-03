import useWindowSize from './index'

import { fireEvent } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

describe('Field', () => {
  it('should be able to render', () => {
    const { result } = renderHook(() => useWindowSize())

    const expectedInitial = {
      innerHeight: undefined,
      innerWidth: undefined
    }

    expect(result.current).toStrictEqual(expectedInitial)
  })

  it('should be able to change return values when window resizes', () => {
    const { result, rerender } = renderHook(() => useWindowSize())

    const expectedOutput = {
      innerHeight: 768,
      innerWidth: 1024
    }

    fireEvent.resize(window)

    rerender()

    expect(result.current).toStrictEqual(expectedOutput)
  })
})
