import { useRecommendations } from './logic'
import { RecommendationsStyle } from './styles'
import type { IRecommendationsProps } from './types'

import DropArrow from 'components/atoms/DropArrow'
import Presence from 'components/atoms/Presence'

import UserCard from 'components/molecules/UserCard'

import { motion } from 'framer-motion'

const Recommendations = ({
  title,
  startOpen = false,
  ...props
}: IRecommendationsProps) => {
  const { onArrowClick, show, animations, recommendations } =
    useRecommendations(startOpen)

  return (
    <RecommendationsStyle {...props}>
      <header>
        <span tabIndex={0}>{title}</span>

        <button
          type='button'
          aria-expanded={show}
          aria-haspopup='menu'
          onClick={onArrowClick}
          aria-label={show ? `Esconder ${title}` : `Mostrar ${title}`}
        >
          <DropArrow condition={show} />
        </button>
      </header>

      <Presence condition={show} {...animations.presence}>
        <motion.ul role='list' {...animations.ul(recommendations.length)}>
          {recommendations.map(({ avatar, id, name, smallBio }) => (
            <motion.li role='listitem' key={id} {...animations.li}>
              <UserCard name={name} smallBio={smallBio} avatar={avatar} />
            </motion.li>
          ))}
        </motion.ul>
      </Presence>
    </RecommendationsStyle>
  )
}

export default Recommendations
