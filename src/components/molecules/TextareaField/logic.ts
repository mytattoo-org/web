import type { IUseFieldParams } from './types'

const useField = <FormValues>({
  name,
  formik
}: IUseFieldParams<FormValues>) => {
  const nameIndex = name as keyof FormValues

  const inputValue = (name
    ? formik.values[nameIndex]
    : undefined) as unknown as string

  const errorMessage = (name ? formik.errors[nameIndex] : undefined) as string
  const inputTouched = name ? formik.touched[nameIndex] : undefined
  const hasFilled = !!inputValue

  const onInputBlur = formik.handleBlur
  const onInputChange = formik.handleChange
  const hasError = errorMessage && inputTouched

  return {
    hasError,
    hasFilled,
    inputValue,
    onInputBlur,
    errorMessage,
    onInputChange
  }
}

export { useField }
