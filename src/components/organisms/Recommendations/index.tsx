import { useRecommendations } from './logic'
import { RecommendationsStyle } from './styles'
import type { IRecommendationsProps } from './types'

import DropArrow from 'components/atoms/DropArrow'

import UserCard from 'components/molecules/UserCard'

import avatar from '@public/avatar2.jpg'

const fakeRecommendations = [
  {
    avatar: avatar,
    id: '1',
    name: 'Vidan Tattoo',
    smallBio: 'The best of the world'
  },
  {
    avatar: avatar,
    id: '2',
    name: 'Vidan Tattoo',
    smallBio: 'The best of the world'
  }
]

const Recommendations = ({ title, ...props }: IRecommendationsProps) => {
  const { onArrowClick, show } = useRecommendations()

  return (
    <RecommendationsStyle {...props}>
      <header>
        <span tabIndex={0}>{title}</span>

        <button
          type='button'
          onClick={onArrowClick}
          aria-label={show ? `Esconder ${title}` : `Mostrar ${title}`}
        >
          <DropArrow condition={show} aria-live='polite' />
        </button>
      </header>

      {show && (
        <ul>
          {fakeRecommendations.map(({ avatar, id, name, smallBio }) => (
            <li key={id}>
              <UserCard name={name} smallBio={smallBio} avatar={avatar} />
            </li>
          ))}
        </ul>
      )}
    </RecommendationsStyle>
  )
}

export default Recommendations
