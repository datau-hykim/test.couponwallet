import React from 'react'
import { ModalStoreType } from 'src/store/zustand'
import styled from 'styled-components'

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

const ModalWrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const ModalInner = styled.div`
  width: 300px;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  display: block;
  flex-direction: column;
  gap: 20px;
`
