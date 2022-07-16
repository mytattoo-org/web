import type { TToBase64 } from './types'

const fileToBase64: TToBase64 = async file =>
  await new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    }
  })

export { fileToBase64 }
