import { AppProps } from 'next/app'
import type { ReactNode } from 'react'

interface IGlobalProviderProps {
  children: ReactNode | AppProps['Component']
}

export type { IGlobalProviderProps }
