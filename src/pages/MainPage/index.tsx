import MainPageView from 'src/pages/MainPage/view'
import { QueryClient } from '@tanstack/react-query'
import { termsQueryOption, useCustomQuery } from 'src/hooks/react-query/useCustomQuery.hook'

export interface MainPageProps {}

export const mainPageLoader = (queryClient: QueryClient) => async () => {
  // return (
  //   queryClient.getQueryData(termsQueryOption().queryKey) ??
  //   (await queryClient.fetchQuery(termsQueryOption()))
  // )
  return null
}


const MainPage = () => {
  const { data, isSuccess } = useCustomQuery({option:'terms'})
  const props = {}
  console.log(data)
  return <MainPageView {...props} />
}
export default MainPage
