import { SearchPageProps } from 'src/pages/SearchPage/index'
import { Outlet } from 'react-router-dom'

const SearchPageView = ({}: SearchPageProps) => {
  return (
    <>
      SearchPageView
      <Outlet />
    </>
  )
}
export default SearchPageView
