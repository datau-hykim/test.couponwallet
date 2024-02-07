import { targetType } from 'src/hooks/useObserver.hook'
import React, { Dispatch, ReactNode, SetStateAction } from 'react'

interface InfiniteScrollProps {
  isSuccess: boolean
  isPending: boolean
  setTarget: Dispatch<SetStateAction<targetType>>
}

const InfiniteScroll = (props: InfiniteScrollProps & { children: ReactNode }) => {
  const { children, setTarget, isSuccess, isPending } = props
  return (
    <>
      {isPending && <>Loading...</>}
      {isSuccess && children}
      <div ref={setTarget} />
    </>
  )
}

export default InfiniteScroll
