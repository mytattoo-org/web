import {
  IReadUsersRequestParams,
  TReadUsersResponse
} from '../../../submodules/common/src/types/users/readUsers.types'

const request: IReadUsersRequestParams = {
  id: '1'
}

const response = (one: boolean): TReadUsersResponse => {
  if (one) {
    const user: TReadUsersResponse['user'] = {
      id: '1',
      username: 'InSTinToS',
      email: 'instintos@instintos.com',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    return { user }
  }

  const user: TReadUsersResponse['user'] = {
    id: '1',
    username: 'InSTinToS',
    email: 'instintos@instintos.com',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }

  const user2: TReadUsersResponse['user'] = {
    id: '2',
    username: 'InSTinToS2',
    email: 'instintos2@instintos.com',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }

  return { users: [user, user2] }
}

const readUsers = { response, request }

export default readUsers
