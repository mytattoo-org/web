import { FeedbackStyle } from './styles'
import type { IFeedbackProps } from './types'

const Feedback = ({ title, content, className, ...props }: IFeedbackProps) => (
  <FeedbackStyle className={className} {...props}>
    <div className='title'>{title}</div>

    <div className='content'>{content}</div>
  </FeedbackStyle>
)

export default Feedback
