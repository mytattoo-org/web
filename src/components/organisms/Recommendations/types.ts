import { MotionProps } from 'framer-motion'

interface IRecommendationsStyleProps {}

interface IRecommendationsProps extends IRecommendationsStyleProps {
  title: string
  startOpen?: boolean
}

type TUlAnimation = (itemsQuantity: number) => MotionProps

export type { IRecommendationsProps, IRecommendationsStyleProps, TUlAnimation }
