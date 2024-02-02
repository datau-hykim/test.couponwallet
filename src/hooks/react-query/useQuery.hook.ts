import { useQuery } from '@tanstack/react-query'

import { fetch } from 'src/service/api/fetcher'

const useTermsQuery = (): any => {
  const { data, isSuccess, isLoading } = useQuery(TermsQueryOption())
  return { data: data?.Body, isLoading, isSuccess }
}

export { useTermsQuery }

const TermsQueryOption = () => ({
  queryKey: ['termsList'],
  queryFn: async () => await fetch.post(1020),
})

export { TermsQueryOption }
