import { useField } from './logic'
import { Error, FieldStyle, Tooltip } from './styles'
import type { IFieldProps } from './types'

import Alert from 'components/atoms/Icon/icons/Alert'
import ClosedEye from 'components/atoms/Icon/icons/ClosedEye'
import Eye from 'components/atoms/Icon/icons/Eye'
import Input from 'components/atoms/Input'

import composeClassName from 'utils/composeClassName'

const Field = <FormValues,>({
  type,
  name,
  label,
  formik,
  className,
  ariaName,
  ...props
}: IFieldProps<FormValues>) => {
  const {
    showEye,
    showEyes,
    hasError,
    inputType,
    hasFilled,
    onEyeClick,
    inputValue,
    onInputBlur,
    errorMessage,
    onInputChange,
    onClosedEyeClick
  } = useField<FormValues>({ formik, name, type })

  return (
    <FieldStyle
      hasError={hasError}
      hasFilled={hasFilled}
      className={composeClassName(`Field ${name}Field`, className)}
    >
      {hasError && (
        <Tooltip
          ariaName={ariaName}
          trigger={<Alert />}
          content={
            <Error>
              <Alert />

              <div aria-label={`${ariaName} error message`} role='alert'>
                {errorMessage}
              </div>
            </Error>
          }
        />
      )}

      <label htmlFor={name}>{label}</label>

      <Input
        id={name}
        name={name}
        type={inputType}
        value={inputValue}
        onBlur={onInputBlur}
        onChange={onInputChange}
        {...props}
      />

      {showEyes &&
        (showEye ? (
          <Eye className='eye' onClick={onEyeClick} />
        ) : (
          <ClosedEye className='eye' onClick={onClosedEyeClick} />
        ))}
    </FieldStyle>
  )
}

export default Field
