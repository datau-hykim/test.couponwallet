import { targetType } from 'src/hooks/react-query/useInfiniteQuery.hook.ts/useObserver.hook'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { InfiniteData } from '@tanstack/react-query'

const InfiniteScroll = (props: {
  children: ReactNode
  InfiniteScrollQueryItems: {
    data: InfiniteData<any, unknown> | undefined
    isSuccess: boolean
    isPending: boolean
    setTarget: Dispatch<SetStateAction<targetType>>
  }
}) => {
  const { children, InfiniteScrollQueryItems } = props
  const { setTarget, isSuccess, isPending } = InfiniteScrollQueryItems
  return (
    <>
      {isPending && <>Loading...</>}
      {isSuccess && children}
      <div ref={setTarget} />
    </>
  )
}

export default InfiniteScroll
