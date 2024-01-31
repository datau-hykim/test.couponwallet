import { Outlet, ScrollRestoration } from 'react-router-dom'
import useMatchHook from 'src/hooks/useMatchHook'

const PageLayout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}
export default PageLayout
