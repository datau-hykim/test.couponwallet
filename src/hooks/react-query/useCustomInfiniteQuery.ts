import { fetch } from 'src/service/api/fetcher'
import useIntersectionObserver from 'src/hooks/useObserver.hook'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInfiniteQueryOptionInterface, useInfiniteQueryOptionType } from 'src/types/react-query'

const useInfiniteScrollQuery = <T, U>({ option }: { option: useInfiniteQueryOptionType }) => {
  console.log('here')
  const queryOptions: {
    [key in useInfiniteQueryOptionType]: useInfiniteQueryOptionInterface<U>
  } = {
    coupon: useInfiniteScrollQueryOption<T, U>(),
    banner: useInfiniteScrollQueryOption<T, U>(),
  }
  const queryOption = queryOptions[option as useInfiniteQueryOptionType]
  const {
    data, // 💡 data.pages를 갖고 있는 배열
    // status, // 💡 loading, error, success 중 하나의 상태, string
    fetchNextPage,
    hasNextPage,
    isSuccess,
    isPending,
  } = useInfiniteQuery(queryOption)

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  })

  return { data, isSuccess, isPending, setTarget }
}

const useInfiniteScrollQueryOption = <T, U>() => ({
  queryKey: ['couponItems'],
  queryFn: async ({ pageParam = 1 }) =>
    await fetch.post<any, U>('coupon/list', 0, {
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
