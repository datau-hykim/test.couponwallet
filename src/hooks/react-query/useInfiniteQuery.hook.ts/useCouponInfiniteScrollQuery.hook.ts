import { fetch } from 'src/service/api/fetcher'
import useIntersectionObserver from 'src/hooks/react-query/useInfiniteQuery.hook.ts/useObserver.hook'
import { useInfiniteQuery } from '@tanstack/react-query'

type InfiniteScrollItemsOptionType = 'coupon' | 'banner'

type InfiniteScrollQueryOptionType = {
  queryKey: string[]
  staleTime: number
  meta: { errorMessage: string }
  getNextPageParam: (lastPage: any) => number
  queryFn: ({ pageParam }: { pageParam: number }) => any
  initialPageParam: number
}
const useInfiniteScrollQuery = ({ option }: { option: InfiniteScrollItemsOptionType }) => {
  const queryOptions: {
    [key in InfiniteScrollItemsOptionType]: InfiniteScrollQueryOptionType
  } = {
    coupon: useInfiniteScrollQueryOption(),
    banner: useInfiniteScrollQueryOption(),
  }
  const queryOption = queryOptions[option as InfiniteScrollItemsOptionType]
  const {
    data, // 💡 data.pages를 갖고 있는 배열
    status, // 💡 loading, error, success 중 하나의 상태, string
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(queryOption)

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  })

  return {
    data,
    isSuccess: status === 'success', //success
    isPending: status === 'pending', // pending
    setTarget, // 무한 스크롤 컨텐츠 제일 아래나 아래에 있는 요소 최상단에 ref 설정, 타겟 감시용
  }
}

const useInfiniteScrollQueryOption = () => ({
  queryKey: ['couponItems'],
  queryFn: async ({ pageParam = 1 }) =>
    await fetch.post('coupon/list', 0, {
      page: pageParam,
      size: 10,
    }),
  initialPageParam: 1,
  staleTime: Infinity,
  //요청이 완료 된 후에 가장 최신 응답 값으로 몇 페이지인지 계산 해서 return 함
  getNextPageParam: (lastPage: any) => {
    console.log('last page : ', lastPage)
    return lastPage?.pageNumber + 1
  },
  // maxPages: 10,
  meta: { errorMessage: `무한 스크롤 에러` },
})

export default useInfiniteScrollQuery
