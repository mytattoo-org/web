import { IWindowSize } from './types'

import { useEffect, useState } from 'react'

const getDimensions = () => ({
  innerHeight: globalThis.innerHeight,
  innerWidth: globalThis.innerWidth
})

const useWindowSize = (): IWindowSize => {
  const [dimensions, setDimensions] = useState<IWindowSize>(getDimensions())

  useEffect(() => {
    const resize = () => {
      setDimensions(prev => {
        const newDimensions = getDimensions()

        return prev === newDimensions ? prev : newDimensions
      })
    }

    if (!dimensions) resize()

    globalThis.addEventListener('resize', resize)

    return () => globalThis.removeEventListener('resize', resize)
  }, [dimensions])

  return dimensions
}

export default useWindowSize
