import React from 'react'

import { ModalStatusType, ModalStoreType, useModalStore } from 'src/store/zustand'
import { Alert, Confirm } from 'src/components/Common/Modal/view'

const Modal = () => {
  const modalStore = useModalStore()
  const modalContentsComponent: {
    [key in ModalStatusType]: (props: ModalStoreType) => JSX.Element
  } = {
    alert: Alert,
    confirm: Confirm,
    none: () => <></>,
  }

  const ModalContentsComponent = modalContentsComponent[modalStore.status as ModalStatusType]

  return <ModalContentsComponent {...modalStore} />
}
export default Modal
