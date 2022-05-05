import { IWindowSize } from './types'

import { useEffect, useState } from 'react'

const getDimensions = () => ({
  innerHeight: globalThis.innerHeight,
  innerWidth: globalThis.innerWidth
})

const useWindowSize = (): IWindowSize => {
  const [dimensions, setDimensions] = useState<IWindowSize>({
    innerHeight: undefined,
    innerWidth: undefined
  })

  useEffect(() => {
    const resize = () => {
      setDimensions(getDimensions())
    }

    globalThis.addEventListener('resize', resize)
    return () => globalThis.removeEventListener('resize', resize)
  }, [])

  return dimensions
}

export default useWindowSize
