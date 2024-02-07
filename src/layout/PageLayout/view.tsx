import { Outlet, ScrollRestoration } from 'react-router-dom'
import { PageLayoutProps } from 'src/layout/PageLayout/index'
import Header from 'src/layout/Header/view'
import Footer from 'src/layout/Footer/view'
import Tabbar from 'src/layout/TabBar/view'
import styled from 'styled-components'
import ContentsLayout from 'src/layout/ContentsLayout'

const PageLayoutView = ({}: PageLayoutProps) => {
  return (
    <PageLayoutViewWrap>
      <ScrollRestoration />
      <Header />
      <ContentsLayout>
        <Outlet />
      </ContentsLayout>
      <Tabbar />
      <Footer />
    </PageLayoutViewWrap>
  )
}
export default PageLayoutView

const PageLayoutViewWrap = styled.div``
