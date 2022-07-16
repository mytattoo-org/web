import { useFile } from './logic'
import { FileStyle } from './styles'
import type { IFileProps } from './types'

const File = ({ formik, onChange, name, ...props }: IFileProps) => {
  const { onFileChange } = useFile({ onChange, formik, name })

  return (
    <FileStyle
      name={name}
      type='file'
      onChange={onFileChange}
      accept='image/png, image/jpeg'
      {...props}
    />
  )
}

export default File
