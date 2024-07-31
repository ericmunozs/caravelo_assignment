import { FC } from 'react'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const Modal: FC<React.ComponentProps<typeof Dialog>> = (props) => (
  <Dialog {...props} />
)
const ModalClose: FC<React.ComponentProps<typeof DialogClose>> = (props) => (
  <DialogClose {...props} />
)
const ModalContent: FC<React.ComponentProps<typeof DialogContent>> = (
  props
) => <DialogContent {...props} />
const ModalHeader: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <DialogHeader {...props} />
)
const ModalTitle: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <DialogTitle {...props} />
)
const ModalDescription: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <DialogDescription {...props} />
)
const ModalFooter: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <DialogFooter {...props} />
)

export {
  Modal,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
}
