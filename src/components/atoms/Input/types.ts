import { ComponentPropsWithoutRef } from 'react'

interface IInputStyleProps {}

interface IUseInputParams {
  onMouseDown: ComponentPropsWithoutRef<'input'>['onMouseDown']
  onBlur: ComponentPropsWithoutRef<'input'>['onBlur']
}

interface IInputProps
  extends ComponentPropsWithoutRef<'input'>,
    IInputStyleProps {}

export type { IInputStyleProps, IInputProps, IUseInputParams }
