import React from 'react'
import { ModalStoreType } from 'src/store/zustand'
import { ModalInner, ModalWrap } from 'src/styles/Common/modal_styled'

const Alert = (props?: ModalStoreType) => {
  const { title, closeModal, okText, onOkHandler, content } = props as ModalStoreType
  return (
    <ModalWrap>
      <ModalInner>
        <p>{title}</p>
        <p>{content}</p>
        <button onClick={onOkHandler ?? closeModal}>{okText}</button>
      </ModalInner>
    </ModalWrap>
  )
}

const Confirm = (props?: ModalStoreType) => {
  const { title, closeModal, okText, onOkHandler, content, onCancelHandler, cancelText, children } =
    props as ModalStoreType
  return (
    <ModalWrap>
      <ModalInner>
        <p>{title}</p>
        <p>{content}</p>
        {children}
        <button onClick={onOkHandler ?? closeModal}>{okText}</button>
        <button onClick={onCancelHandler ?? closeModal}>{cancelText}</button>
      </ModalInner>
    </ModalWrap>
  )
}
export { Alert, Confirm }
