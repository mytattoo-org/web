import {
  ICreateUserRequest,
  TCreateUserResponse
} from '../../../submodules/common/src/types/users/createUser.types'

import { uuid } from 'uuidv4'

const request: ICreateUserRequest = {
  username: 'InSTinToS',
  password: 'InSTinToS@1234',
  email: 'instintos@gmail.com'
}

const response: TCreateUserResponse = {
  createdUser: {
    id: uuid(),
    email: request.email,
    username: request.username,
    updated_at: new Date().toUTCString(),
    created_at: new Date().toUTCString()
  }
}

const createUser = { request, response }

export default createUser
