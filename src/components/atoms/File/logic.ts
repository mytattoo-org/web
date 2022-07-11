import type { TOnFileChange, TUseFile } from './types'

import { fileToBase64 } from 'utils/fileToBase64'

const useFile: TUseFile = ({ formik, onChange, name }) => {
  const onFileChange: TOnFileChange = async event => {
    const files = event?.currentTarget?.files

    if (files !== null) {
      const base64Avatar = await fileToBase64(files[0])

      formik.setFieldValue(name, base64Avatar)
    }

    onChange && onChange(event)
  }

  return { onFileChange }
}

export { useFile }
