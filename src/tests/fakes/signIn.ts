import {
  ISignInRequest,
  TSignInResponse
} from '../../../submodules/common/src/types/authentication/signIn.types'

const request: ISignInRequest = {
  password: 'InSTinToS@1234',
  usernameOrEmail: 'InSTinToS'
}

const response: TSignInResponse = { id: '1', token: '1' }

const signIn = { request, response }

export default signIn
