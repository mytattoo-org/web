import { IFeedbackState, IForwardFeedback, TTriggerFeedback } from './types'

import { Ref, useImperativeHandle, useState } from 'react'

const useFeedback = (ref: Ref<IForwardFeedback>) => {
  const [feedback, setFeedback] = useState<IFeedbackState>({
    open: false
  })

  const triggerFeedback: TTriggerFeedback = props => {
    setFeedback({ open: true, ...props })

    setTimeout(() => {
      setFeedback({ open: false })
    }, 2000)
  }

  useImperativeHandle(ref, () => ({ triggerFeedback }))

  return { ...feedback }
}

export { useFeedback }
