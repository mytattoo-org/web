import { ICreateUserRequest } from '../../../../submodules/common/src/types/users/createUser.types'

import { FormikConfig } from 'formik'

interface ISignUpStyleProps {}

interface ISignUpProps extends ISignUpStyleProps {}

interface ISignUpValues extends Partial<ICreateUserRequest> {
  confirmPassword?: ICreateUserRequest['password']
}

type TOnSignupSubmit = FormikConfig<ISignUpValues>['onSubmit']

export type { ISignUpProps, ISignUpStyleProps, ISignUpValues, TOnSignupSubmit }
