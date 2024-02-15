import SplashPageView from 'src/pages/SplashPage/view'
import { useEffect } from 'react'
import { redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'
import { useModalStore } from 'src/store/zustand'

export interface SplashPageProps {}

export const splashPageLoader = (queryClient: QueryClient) => async () => {
  //Todo: 방문이력
  const isInitialRun = true
  return isInitialRun
}

const SplashPage = () => {
  const isInitialRun = useLoaderData()
  const navigate = useNavigate()
  const { openConfirm } = useModalStore()
  const splashTime = 3000

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      if (isInitialRun) {
        navigate('/web/main/userId')
      } else {
        openConfirm({
          title: '서비스 가입 여부 확인',
          content: `휴대폰쿠폰지갑은 앱 최초실행 시, 서비스가입 여부 확인을 위해 휴대폰번호를 수집합니다. 이에 동의하시면 '시작하기'를 눌러주세요.`,
          okText: '시작하기',
          cancelText: '앱 종료',
          onOkHandler: () => {

          },
          onCancelHandler: () => {

          }
        })
      }
    }, splashTime)
    return () => clearTimeout(splashTimer)
  }, [isInitialRun])

  const props: SplashPageProps = {}

  return <SplashPageView {...props} />
}
export default SplashPage
