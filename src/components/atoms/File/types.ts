import { FormikProps } from 'formik'
import { InputHTMLAttributes } from 'react'

type TOnFileChange = InputHTMLAttributes<HTMLInputElement>['onChange']

interface IUserFileParams {
  formik: IFileProps['formik']
  onChange: IFileProps['onChange']
}

interface IUserFileReturn {
  onFileChange: TOnFileChange
}

type TUseFile = (params: IUserFileParams) => IUserFileReturn

interface IFileProps extends InputHTMLAttributes<HTMLInputElement> {
  formik: FormikProps<any>
}

export type { IFileProps, TUseFile, TOnFileChange }
