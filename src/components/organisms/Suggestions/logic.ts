import { animations } from './animations'

import avatar from '@public/temp/avatar2.jpg'

import { useState } from 'react'

const fakeSuggestions = [
  {
    avatar: avatar,
    id: '1',
    name: 'Vidan Tattoo',
    smallBio: 'Vitor D.'
  },
  {
    avatar: avatar,
    id: '2',
    name: 'Vidan Tattoo',
    smallBio: 'Vitor D.'
  },
  {
    avatar: avatar,
    id: '3',
    name: 'Vidan Tattoo',
    smallBio: 'Vitor D.'
  },
  {
    avatar: avatar,
    id: '4',
    name: 'Vidan Tattoo',
    smallBio: 'Vitor D.'
  },
  {
    avatar: avatar,
    id: '5',
    name: 'Vidan Tattoo',
    smallBio: 'Vitor D.'
  },
  {
    avatar: avatar,
    id: '6',
    name: 'Vidan Tattoo',
    smallBio: 'Vitor D.'
  }
]

const useSuggestions = (startOpen: boolean) => {
  const [show, setShow] = useState(startOpen)

  const onArrowClick = () => {
    setShow(prev => !prev)
  }

  return {
    show,
    animations,
    onArrowClick,
    recommendations: fakeSuggestions
  }
}

export { useSuggestions }
