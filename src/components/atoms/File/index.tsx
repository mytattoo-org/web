import { useFile } from './logic'
import { FileStyle } from './styles'
import type { IFileProps } from './types'

const File = ({ formik, onChange, ...props }: IFileProps) => {
  const { onFileChange } = useFile({ onChange, formik })

  return (
    <FileStyle
      type='file'
      onChange={onFileChange}
      accept='image/png, image/jpeg'
      {...props}
    />
  )
}

export default File
