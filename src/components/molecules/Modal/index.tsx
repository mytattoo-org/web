import { useModal } from './logic'
import { ModalStyle } from './styles'
import type { IForwardModal, IModalProps } from './types'

import composeClassName from 'utils/composeClassName'

import { forwardRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = forwardRef<IForwardModal, IModalProps>(
  ({ children, className, ...props }, ref) => {
    const { onBackgroundClick, modal } = useModal(ref)

    return modal.open === true ? (
      createPortal(
        <ModalStyle className={composeClassName('Modal', className)} {...props}>
          {children}
          <div className='transparentBackground' onClick={onBackgroundClick} />
        </ModalStyle>,
        document.getElementById('modal') as Element
      )
    ) : (
      <></>
    )
  }
)

export default Modal
