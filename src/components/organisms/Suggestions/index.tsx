import { useSuggestions } from './logic'
import { SuggestionsStyle } from './styles'
import type { ISuggestionsProps } from './types'

import DropArrow from 'components/atoms/DropArrow'
import Presence from 'components/atoms/Presence'

import UserCard from 'components/molecules/UserCard'

import { motion } from 'framer-motion'

const Suggestions = ({
  title,
  startOpen = false,
  ...props
}: ISuggestionsProps) => {
  const { onArrowClick, show, animations, suggestions } =
    useSuggestions(startOpen)

  return (
    <SuggestionsStyle {...props}>
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
        <motion.ul role='list' {...animations.ul(suggestions.length)}>
          {suggestions.map(({ avatar, username, short_bio }, index) => (
            <motion.li role='listitem' key={index} {...animations.li}>
              <UserCard name={username} smallBio={short_bio} avatar={avatar} />
            </motion.li>
          ))}
        </motion.ul>
      </Presence>
    </SuggestionsStyle>
  )
}

export default Suggestions
