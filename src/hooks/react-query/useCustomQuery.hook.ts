import { useQuery } from '@tanstack/react-query'
import { fetch } from 'src/service/api/fetcher'
import { useQueryOptionInterface, useQueryOptionType } from 'src/types/react-query'

const useCustomQuery = <T, U>({ option }: { option: useQueryOptionType }) => {
  const queryOptions: {
    [key in useQueryOptionType]: useQueryOptionInterface<U>
  } = {
    terms: termsQueryOption<T, U>(),
    faq: termsQueryOption<T, U>(),
  }
  const queryOption = queryOptions[option as useQueryOptionType]

  const { data, isSuccess, isLoading } = useQuery(queryOption)
  return { data: data?.Body, isLoading, isSuccess }
}

const termsQueryOption = <T, U>() => ({
  queryKey: ['termsList'],
  queryFn: async () => await fetch.post<T, U>('', 1020),
})

export { useCustomQuery, termsQueryOption }
