import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

type TNextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout
}

export type { TNextPageWithLayout, TAppPropsWithLayout }
