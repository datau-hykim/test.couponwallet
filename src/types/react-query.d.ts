export type useQueryOptionType = 'terms' | 'faq'
export type useMutationOptionType = 'cancel' | 'join'
export type useInfiniteQueryOptionType = 'coupon' | 'banner'
interface useQueryOptionInterface<U> {
  queryKey: string[]
  queryFn: () => Promise<ResponseDataType<U>>
}

interface useMutationOptionInterface<T, U> {
  mutationKey: string[]
  mutationFn: (data: T) => Promise<ResponseDataType<U>>
}

interface useInfiniteQueryOptionInterface<U> {
  queryKey: string[]
  staleTime: number
  meta: { errorMessage: string }
  getNextPageParam: (lastPage: any) => number
  queryFn: ({ pageParam }: { pageParam: number }) => Promise<ResponseDataType<U>>
  initialPageParam: number
}
