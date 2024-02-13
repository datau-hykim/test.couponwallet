import { SplashPageProps } from 'src/pages/SplashPage/index'
import { useMatches } from 'react-router-dom'
import styled from 'styled-components'

const SplashPageView = ({}: SplashPageProps) => {
  return (
    <SplashWrap>
      <SplashServiceLogo alt={'로고 이미지'} />
      <SplashPrimary>할인쿠폰으로 채우는 나만의 지갑</SplashPrimary>
      <SplashSecondary>휴대폰쿠폰지갑</SplashSecondary>
    </SplashWrap>
  )
}
export default SplashPageView

const SplashWrap = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const SplashServiceLogo = styled.img`
  border: 1px solid red;
  width: 60px;
  height: 60px;
`
const SplashPrimary = styled.p``
const SplashSecondary = styled.span``
