import {
  IReadUsersRequestParams,
  TReadUsersResponse
} from '@common/types/users/useCases/readUsers.types'

const request: IReadUsersRequestParams = {
  id: '1'
}

interface IResponseParams {
  one?: boolean
}

const response = (options?: IResponseParams): TReadUsersResponse => {
  const one = options?.one || true

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
