import type { TOnFileChange, TUseFile } from './types'

import { toBase64 } from 'utils/toBase64'

const useFile: TUseFile = ({ formik, onChange }) => {
  const onFileChange: TOnFileChange = async event => {
    const file = event?.currentTarget?.files

    if (file !== null) {
      const base64Avatar = await toBase64(file[0])
      formik.setFieldValue('avatar', base64Avatar)
    }

    onChange && onChange(event)
  }

  return { onFileChange }
}

export { useFile }
