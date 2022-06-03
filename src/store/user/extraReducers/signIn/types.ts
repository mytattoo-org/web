import { IUserStore } from '../../types'

import { ISignInRequest } from '@common/types/authentication/useCases/signIn.types'

type TSignIn = (data: ISignInRequest) => Promise<IUserStore>

export type { TSignIn }
