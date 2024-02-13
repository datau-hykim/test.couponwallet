import PageLayoutView from 'src/components/layout/PageLayout/view'
import { QueryClient } from '@tanstack/react-query'
import { Params, redirect } from 'react-router-dom'
import { extractNumbersFromString } from 'src/utils'
import { termsQueryOption, useCustomQuery } from 'src/hooks/react-query/useCustomQuery.hook'
import { useEffect } from 'react'
import { Simulate } from 'react-dom/test-utils'
import error = Simulate.error

export interface PageLayoutProps {}

export const pageLoader = async ({ params }: { params: Params }) => {
  const { channel } = params
  const paramsChannelList = ['web', 'app']

  if (!!channel && paramsChannelList.includes(channel as string)) {
    return null
  }
}

const PageLayout = () => {
  // const { data } = useCustomQuery({option:'terms'})
  useEffect(() => {
    const setOneVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    setOneVh()
    window.addEventListener('resize', setOneVh)
  }, [])

  const props: PageLayoutProps = {}

  return <PageLayoutView {...props} />
}
export default PageLayout
