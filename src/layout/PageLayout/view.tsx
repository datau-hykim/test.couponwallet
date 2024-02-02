import { Outlet, ScrollRestoration } from 'react-router-dom'
import { PageLayoutProps } from 'src/layout/PageLayout/index'

const PageLayoutView = ({}: PageLayoutProps) => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}
export default PageLayoutView
