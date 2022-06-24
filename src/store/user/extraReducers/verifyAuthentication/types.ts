import { IUserStore } from '../../types'

import { TPayloadCreator } from 'typescript/redux.types'

type TVerifyAuthentication = TPayloadCreator<IUserStore['user'], void>

export type { TVerifyAuthentication }
