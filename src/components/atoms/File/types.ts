import { FormikProps } from 'formik'
import { InputHTMLAttributes } from 'react'

type TOnFileChange = InputHTMLAttributes<HTMLInputElement>['onChange']

interface IUserFileParams {
  name: string
  formik: IFileProps['formik']
  onChange: IFileProps['onChange']
}

interface IUserFileReturn {
  onFileChange: TOnFileChange
}

type TUseFile = (params: IUserFileParams) => IUserFileReturn

interface IFileProps extends InputHTMLAttributes<HTMLInputElement> {
  formik: FormikProps<any>
  name: string
}

export type { IFileProps, TUseFile, TOnFileChange }
