import { useFeedback } from './logic'
import { FeedbackStyle } from './styles'
import type { IForwardFeedback } from './types'

import { ComponentPropsWithoutRef, forwardRef } from 'react'
import ReactDOM from 'react-dom'

const Feedback = forwardRef<IForwardFeedback, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    const { open, title, content, color } = useFeedback(ref)

    return open ? (
      ReactDOM.createPortal(
        <FeedbackStyle
          color={color}
          data-cy='feedback'
          className={className}
          {...props}
        >
          <div className='title'>{title}</div>

          <div className='content'>{content}</div>
        </FeedbackStyle>,
        document.getElementById('popup') as Element
      )
    ) : (
      <></>
    )
  }
)

export default Feedback
