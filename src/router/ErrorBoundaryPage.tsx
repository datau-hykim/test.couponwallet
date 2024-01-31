import { useRouteError } from 'react-router-dom'
import { AxiosError } from 'axios'

const ErrorBoundaryPage = () => {
  // const error = useRouteError()
  // if (error instanceof AxiosError) {
  console.warn('error')

  return <div>잘못된 접근입니다</div>
}

export default ErrorBoundaryPage
