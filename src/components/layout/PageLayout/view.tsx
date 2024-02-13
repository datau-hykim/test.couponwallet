import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from 'src/components/layout/Header'
import Footer from 'src/components/layout/Footer'
import styled from 'styled-components'
import ContentsLayout from 'src/components/layout/ContentsLayout'
import TopButton from 'src/components/common/TopButton'
import { PageLayoutProps } from 'src/components/layout/PageLayout/index'
import { useEffect } from 'react'

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
  height: calc(var(--vh, 1vh) * 100);
`
