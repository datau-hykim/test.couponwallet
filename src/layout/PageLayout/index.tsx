import PageLayoutView from 'src/layout/PageLayout/view'
import { QueryClient } from '@tanstack/react-query'
import { Params } from 'react-router-dom'
import { extractNumbersFromString } from 'src/utils'
import { termsQueryOption, useTermsQuery } from 'src/hooks/react-query/useQuery.hook'

export interface PageLayoutProps {}

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: Params }) => {
    const { channel, couponIdx, paymentStatus } = params
    const paramsChannelList = ['web', 'app']
    const paymentStatusList = ['success', 'fail']

    // params 값 체크
    switch (true) {
      case !!couponIdx && extractNumbersFromString(couponIdx as string)?.length === 0:
      case !!paramsChannelList && !paramsChannelList.includes(channel as string):
      case !!paymentStatus && !paymentStatusList.includes(paymentStatus as string):
        return undefined
      default:
        return (
          queryClient.getQueryData(termsQueryOption().queryKey) ??
          (await queryClient.fetchQuery(termsQueryOption()))
        )
    }
  }
// export const action = (queryClient: QueryClient) => async () => {
//   await queryClient.invalidateQueries({ queryKey: ['termsList'] })
// }

const PageLayout = () => {
  const { data } = useTermsQuery()

  const props: PageLayoutProps = {}

  return <PageLayoutView {...props} />
}
export default PageLayout
