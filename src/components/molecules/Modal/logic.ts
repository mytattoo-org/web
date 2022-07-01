import { useEffect, useImperativeHandle, useState } from 'react'

const initialValue = { open: false }

const useModal = (ref: any) => {
  const [modal, setModal] = useState(initialValue)

  useEffect(() => {
    document.addEventListener('keypress', ({ key }) => {
      key === 'Escape' && onBackgroundClick()
    })
  }, [])

  const onBackgroundClick = () => {
    setModal(initialValue)
  }

  const triggerModal = (props: any) => {
    setModal(props)
  }

  useImperativeHandle(ref, () => ({ triggerModal }))

  return { onBackgroundClick, modal }
}

export { useModal }
