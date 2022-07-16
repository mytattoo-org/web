import { IInputProps } from 'components/atoms/Input/types'

import { FormikProps } from 'formik'

interface IUseFieldParams<FormValues> {
  name: IInputProps['name']
  type: IInputProps['type']
  formik: FormikProps<FormValues>
}

interface IFieldStyleProps {
  hasError: any
  hasFilled: boolean
}

interface IFieldProps<FormValues>
  extends Omit<IUseFieldParams<FormValues>, 'name' | 'type'>,
    IInputProps {
  name: string
  label?: string
  ariaName?: string
}

export type { IFieldProps, IFieldStyleProps, IUseFieldParams }
