import { useQuery } from '@tanstack/react-query'

import { fetch } from 'src/service/api/fetcher'

const useTermsQuery = (): any => {
  const { data, isSuccess, isLoading } = useQuery(termsQueryOption())
  return { data: data?.Body, isLoading, isSuccess }
}

const termsQueryOption = () => ({
  queryKey: ['termsList'],
  queryFn: async () => await fetch.post(1020),
})

//쿼리
export { useTermsQuery }
//옵션
export { termsQueryOption }
