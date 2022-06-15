import { animations } from './animations'

import avatar from '@public/temp/avatar2.jpg'

import { useState } from 'react'

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
  },
  {
    avatar: avatar,
    id: '3',
    name: 'Vidan Tattoo',
    smallBio: 'The best of the world'
  },
  {
    avatar: avatar,
    id: '4',
    name: 'Vidan Tattoo',
    smallBio: 'The best of the world'
  },
  {
    avatar: avatar,
    id: '5',
    name: 'Vidan Tattoo',
    smallBio: 'The best of the world'
  },
  {
    avatar: avatar,
    id: '6',
    name: 'Vidan Tattoo',
    smallBio: 'The best of the world'
  }
]

const useRecommendations = (startOpen: boolean) => {
  const [show, setShow] = useState(startOpen)

  const onArrowClick = () => {
    setShow(prev => !prev)
  }

  return {
    show,
    animations,
    onArrowClick,
    recommendations: fakeRecommendations
  }
}

export { useRecommendations }
