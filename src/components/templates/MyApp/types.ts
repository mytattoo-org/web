import { IForwardFeedback } from 'components/molecules/Feedback/types'

import { TAppPropsWithLayout } from 'typescript/next.types'

export interface IMyAppProps extends TAppPropsWithLayout {}

export interface IUseMyAppParams {
  Component: IMyAppProps['Component']
}

export interface IGlobalContext {
  feedback: { trigger?: IForwardFeedback['triggerFeedback'] }
}
