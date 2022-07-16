import { HTMLAttributes } from 'react'

interface IModalProps extends HTMLAttributes<HTMLDivElement> {}

interface IModalState {
  open: boolean
  [key: string]: any
}

interface IForwardModal {
  triggerModal: (props: IModalState) => void
}

export type { IModalProps, IForwardModal }
