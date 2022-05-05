import { useTextArea } from './logic'
import { TextAreaStyle } from './styles'
import type { ITextAreaProps } from './types'

const TextArea = ({ onBlur, onMouseDown, ...props }: ITextAreaProps) => {
  const { onTextAreaBlur, onTextAreaDown, outline } = useTextArea({
    onBlur,
    onMouseDown
  })

  return (
    <TextAreaStyle
      outline={outline}
      onBlur={onTextAreaBlur}
      onMouseDown={onTextAreaDown}
      {...props}
    />
  )
}

export default TextArea
