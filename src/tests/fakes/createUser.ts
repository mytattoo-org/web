import {
  ICreateUserRequest,
  TCreateUserResponse
} from '@common/types/users/useCases/createUser.types'

import { uuid } from 'uuidv4'

const request: ICreateUserRequest = {
  username: 'InSTinToS',
  password: 'InSTinToS@1234',
  email: 'instintos@gmail.com'
}

const response = {
  createdUser: {
    avatar: '',
    id: uuid(),
    email: request.email,
    username: request.username,
    updated_at: new Date().toUTCString(),
    created_at: new Date().toUTCString()
  }
}

const createUser = { request, response }

export default createUser
