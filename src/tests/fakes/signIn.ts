import {
  ISignInRequest,
  TSignInResponse
} from '@common/types/authentication/useCases/signIn.types'

const request: ISignInRequest = {
  password: 'InSTinToS@1234',
  usernameOrEmail: 'InSTinToS'
}

const response = { id: '1', token: '1' }

const signIn = { request, response }

export default signIn
