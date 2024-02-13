import {useLocation, useNavigate, useRouteError} from 'react-router-dom'
import { AxiosError } from 'axios'

const ErrorBoundaryPage = () => {
  const error = useRouteError()
  // if (error instanceof AxiosError) {
  console.warn('error', error)
const navigate = useNavigate()
  return(
      <>
      <div>잘못된 접근입니다</div>
      <button onClick={()=>navigate(-1)}>뒤로가기</button>
      </>
      )
}

export default ErrorBoundaryPage
