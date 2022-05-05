import { ComponentPropsWithoutRef } from 'react'

interface IInputStyleProps {
  outline?: string
  outlined?: boolean
}

interface IUseInputParams {
  onMouseDown: ComponentPropsWithoutRef<'input'>['onMouseDown']
  onBlur: ComponentPropsWithoutRef<'input'>['onBlur']
}

interface IInputProps
  extends ComponentPropsWithoutRef<'input'>,
    IInputStyleProps {}

export type { IInputStyleProps, IInputProps, IUseInputParams }
