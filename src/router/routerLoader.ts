import { LoaderFunction } from 'react-router-dom'
import { extractNumbersFromString } from 'src/utils'

const PageLoader: LoaderFunction = async ({ params }) => {
  const { channel, couponIdx, paymentStatus } = params
  const paramsChannelList = ['web', 'app']
  const paymentStatusList = ['success', 'fail']

  // params 값 체크
  switch (true) {
    case !!couponIdx && extractNumbersFromString(couponIdx as string)?.length === 0:
    case !!paramsChannelList && !paramsChannelList.includes(channel as string):
    case !!paymentStatus && !paymentStatusList.includes(paymentStatus as string):
      console.log('here')
      return undefined
    default:
      return null
  }
}

export { PageLoader }
