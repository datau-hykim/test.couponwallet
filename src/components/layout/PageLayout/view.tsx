import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from 'src/components/layout/Header'
import Footer from 'src/components/layout/Footer'
import styled from 'styled-components'
import ContentsLayout from 'src/components/layout/ContentsLayout'
import TopButton from 'src/components/common/TopButton'
import { PageLayoutProps } from 'src/components/layout/PageLayout/index'
import useMatchList from 'src/hooks/useMatchList.hook'

const PageLayoutView = ({}: PageLayoutProps) => {
  const { m_none_header, m_none_footer, m_none_topButton } = useMatchList()

  return (
    <PageLayoutViewWrap>
      <ScrollRestoration />
      {!m_none_header ? <Header /> : <EmptyContainer />}
      <ContentsLayout>
        <Outlet />
      </ContentsLayout>
      {!m_none_footer ? <Footer /> : <EmptyContainer />}
      {/*<Tabbar />*/}
      {!m_none_topButton ? <TopButton /> : <EmptyContainer />}
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

const EmptyContainer = styled.div``
