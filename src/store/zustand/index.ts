import { create } from 'zustand'
import React, { ReactNode } from 'react'

export type ModalStatusType = 'alert' | 'confirm' | 'none'

type ModalState = {
  status?: ModalStatusType
  title: string
  content: JSX.Element | string
  cancelText?: string
  okText?: string
  onOkHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onCancelHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children?: ReactNode
}
type ModalActions = {
  openAlert: (data: ModalState) => void
  openConfirm: (data: ModalState) => void
  closeModal: () => void
}

export type ModalStoreType = ModalState & ModalActions

const initialState: ModalState = {
  status: 'none',
  title: '',
  content: '',
  cancelText: '취소',
  okText: '확인',
  onOkHandler: undefined,
  onCancelHandler: undefined,
  children: null,
}
export const useModalStore = create<ModalStoreType>((set) => ({
  ...initialState,
  openAlert: (data: ModalState) =>
    set((state) => ({
      status: 'alert',
      title: data.title,
      content: data.content,
      okText: data.okText ?? state.okText,
      onOkHandler: data.onOkHandler,
      children: data.children,
    })),
  openConfirm: (data: ModalState) =>
    set((state) => ({
      status: 'confirm',
      title: data.title,
      content: data.content,
      cancelText: data.cancelText ?? state.cancelText,
      okText: data.okText ?? state.okText,
      onOkHandler: data.onOkHandler,
      onCancelHandler: data.onCancelHandler,
      children: data.children,
    })),
  closeModal: () => set(initialState),
}))

//
// 여러 매장을 한 번에 재설정
//
// import { create as _create } from 'zustand'
// import type { StateCreator } from 'zustand'
//
// const storeResetFns = new Set<() => void>()
//
// const resetAllStores = () => {
//   storeResetFns.forEach((resetFn) => {
//     resetFn()
//   })
// }
//
// export const create = (<T extends unknown>() => {
//   return (stateCreator: StateCreator<T>) => {
//     const store = _create(stateCreator)
//     const initialState = store.getState()
//     storeResetFns.add(() => {
//       store.setState(initialState, true)
//     })
//     return store
//   }
// }) as typeof _create
