import { MotionProps } from 'framer-motion'

interface ISuggestionsStyleProps {}

interface ISuggestionsProps extends ISuggestionsStyleProps {
  title: string
  startOpen?: boolean
}

type TUlAnimation = (itemsQuantity: number) => MotionProps

export type { ISuggestionsProps, ISuggestionsStyleProps, TUlAnimation }
