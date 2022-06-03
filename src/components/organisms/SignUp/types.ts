import { ICreateUserRequest } from '@common/types/users/useCases/createUser.types'

import { FormikConfig } from 'formik'

interface ISignUpStyleProps {}

interface ISignUpProps extends ISignUpStyleProps {}

interface ISignUpValues extends Partial<ICreateUserRequest> {
  confirmPassword?: ICreateUserRequest['password']
}

type TOnSignupSubmit = FormikConfig<ISignUpValues>['onSubmit']

export type { ISignUpProps, ISignUpStyleProps, ISignUpValues, TOnSignupSubmit }
