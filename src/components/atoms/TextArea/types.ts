import { ComponentPropsWithoutRef } from 'react'

interface ITextAreaStyleProps {
  outline?: string
}

interface IUseTextareaParams {
  onMouseDown: ComponentPropsWithoutRef<'textarea'>['onMouseDown']
  onBlur: ComponentPropsWithoutRef<'textarea'>['onBlur']
}

interface ITextAreaProps
  extends ComponentPropsWithoutRef<'textarea'>,
    ITextAreaStyleProps {}

export type { ITextAreaStyleProps, ITextAreaProps, IUseTextareaParams }
