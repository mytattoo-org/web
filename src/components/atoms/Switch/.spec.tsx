import GlobalProvider from '../../providers/GlobalProvider'

import { Switch } from '.'
import { act, render, renderHook, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useFormik } from 'formik'

describe('Switch', () => {
  beforeEach(() => {})

  it('Should be able to render', () => {
    const { result, rerender } = renderHook(
      value =>
        useFormik({
          validateOnBlur: true,
          validateOnChange: false,
          initialValues: { toggle: value },
          onSubmit: values => {
            console.log(values)
          }
        }),
      { initialProps: false }
    )

    const formik = result.current

    rerender(true)

    render(
      <GlobalProvider>
        <Switch formik={formik} name='toggle' />
      </GlobalProvider>
    )

    const switchComponent = screen.getByRole('switch')

    expect(switchComponent).toBeInTheDocument()
  })

  it('Should be able switch', async () => {
    const { result } = renderHook(
      value =>
        useFormik({
          validateOnBlur: true,
          validateOnChange: false,
          initialValues: { toggle: value },
          onSubmit: values => {
            console.log(values)
          }
        }),
      { initialProps: true }
    )

    const formik = result.current

    render(
      <GlobalProvider>
        <Switch formik={formik} name='toggle' />
      </GlobalProvider>
    )

    const switchComponent = screen.getByRole('switch')

    await userEvent.click(switchComponent)

    act(() => {
      formik.setFieldValue('toggle', true)
    })

    expect(switchComponent.getAttribute('aria-checked')).toBe('true')

    await userEvent.click(switchComponent)

    act(() => {
      formik.setFieldValue('toggle', false)
    })

    expect(switchComponent.getAttribute('aria-checked')).toBe('true')
  })
})
