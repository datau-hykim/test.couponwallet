import {FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult} from "@tanstack/react-query";
import {Dispatch, SetStateAction} from "react";

export type useQueryOptionType = 'terms' | 'faq'
export type useMutationOptionType = 'cancel' | 'join'
export type useInfiniteQueryOptionType = 'coupon'
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

interface useInfiniteQueryReturnData<U> {
  data?:  InfiniteData<ResponseDataType<U>, unknown> | undefined
  isSuccess?:boolean
  isPending?:boolean
  target?:JSX.Element
  setTarget:Dispatch<SetStateAction<HTMLDivElement | null | undefined>>
}
