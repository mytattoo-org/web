import { useField } from './logic'
import { Error, FieldStyle, Tooltip } from './styles'
import type { IFieldProps } from './types'

import Alert from 'components/atoms/Icon/icons/Alert'
import ClosedEye from 'components/atoms/Icon/icons/ClosedEye'
import Eye from 'components/atoms/Icon/icons/Eye'
import Input from 'components/atoms/Input'

const Field = <FormValues,>({
  name,
  label,
  formik,
  type,
  className = 'Field',
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
    <FieldStyle className={className} hasError={hasError} hasFilled={hasFilled}>
      {hasError && (
        <Tooltip
          trigger={
            <Alert
              title={`${name}Trigger`}
              className='triggerAlert'
              aria-describedby={`${name}Error`}
            />
          }
          content={
            <Error>
              <Alert className='contentAlert' />

              <div role='tooltip' id={`${name}Error`}>
                {errorMessage as any}
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
        value={inputValue as any}
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
