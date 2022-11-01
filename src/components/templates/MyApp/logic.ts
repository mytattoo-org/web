import { IGlobalContext, IUseMyAppParams } from './types'

import { IForwardFeedback } from 'components/molecules/Feedback/types'

import { useRef } from 'react'

export const useMyApp = ({ Component }: IUseMyAppParams) => {
  const feedbackRef = useRef<IForwardFeedback>(null)
  const getLayout = Component.getLayout ?? (page => page)

  const trigger: IForwardFeedback['triggerFeedback'] = props => {
    feedbackRef.current?.triggerFeedback(props)
  }

  const contextValue: IGlobalContext = { feedback: { trigger } }

  return { contextValue, getLayout, feedbackRef }
}
