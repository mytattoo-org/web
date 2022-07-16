import { useField } from './logic'
import { Error, FieldStyle, Tooltip } from './styles'
import type { IFieldProps } from './types'

import Alert from 'components/atoms/Icon/icons/Alert'

import composeClassName from 'utils/composeClassName'

const TextareaField = <FormValues,>({
  type,
  name,
  label,
  formik,
  ariaName,
  className,
  ...props
}: IFieldProps<FormValues>) => {
  const {
    hasError,
    hasFilled,
    inputValue,
    onInputBlur,
    errorMessage,
    onInputChange
  } = useField<FormValues>({ formik, name, type })

  return (
    <FieldStyle
      hasError={hasError}
      hasFilled={hasFilled}
      data-cy={name + 'TextareaField'}
      className={composeClassName(
        `TextareaField ${name}TextareaField`,
        className
      )}
    >
      {hasError && (
        <Tooltip
          trigger={<Alert />}
          ariaName={ariaName || name}
          content={
            <Error>
              <Alert />

              <div
                role='alert'
                aria-label={`${ariaName || name} error message`}
              >
                {errorMessage}
              </div>
            </Error>
          }
        />
      )}

      {label && <label htmlFor={name}>{label}</label>}

      <textarea
        id={name}
        name={name}
        data-cy={name}
        value={inputValue}
        onBlur={onInputBlur as any}
        onChange={onInputChange as any}
        {...(props as any)}
      />
    </FieldStyle>
  )
}

export default TextareaField
