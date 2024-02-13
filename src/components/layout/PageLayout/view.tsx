import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from 'src/components/layout/Header'
import Footer from 'src/components/layout/Footer'
import Tabbar from 'src/components/common/TabBar'
import styled from 'styled-components'
import ContentsLayout from 'src/components/layout/ContentsLayout'
import TopButton from 'src/components/common/TopButton'
import { PageLayoutProps } from 'src/components/layout/PageLayout/index'
import useMatchListHook from 'src/hooks/useMatchList.hook'

const PageLayoutView = ({}: PageLayoutProps) => {
  return (
    <PageLayoutViewWrap>
      <ScrollRestoration />
      <Header />
      <ContentsLayout>
        <Outlet />
      </ContentsLayout>
      <Footer />
      {/*<Tabbar />*/}
      <TopButton />
    </PageLayoutViewWrap>
  )
}
export default PageLayoutView

const PageLayoutViewWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

