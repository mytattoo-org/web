import { useFeedback } from './logic'
import { FeedbackStyle } from './styles'
import type { IForwardFeedback } from './types'

import { ComponentPropsWithoutRef, forwardRef } from 'react'

const Feedback = forwardRef<IForwardFeedback, ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => {
    const { open, title, content, color } = useFeedback(ref)

    return open ? (
      <FeedbackStyle
        color={color}
        data-cy='feedback'
        className={className}
        {...props}
      >
        <div className='title'>{title}</div>

        <div className='content'>{content}</div>
      </FeedbackStyle>
    ) : (
      <></>
    )
  }
)

export default Feedback
