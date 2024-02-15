import { SplashPageProps } from 'src/pages/SplashPage/index'

import styled from 'styled-components'

export const MIN_Y = 60 // 바텀시트가 최대로 높이 올라갔을 때의 y 값
export const MAX_Y = window.innerHeight - 80 // 바텀시트가 최소로 내려갔을 때의 y 값

const SplashPageView = ({}: SplashPageProps) => {
  return (
    <>

      <SplashWrap>
        {/*<input type={'file'} accept="file_extension|audio/*|video/*|image/*|media_type" />*/}
        <SplashServiceLogo alt={'로고 이미지'} />
        <SplashPrimary>할인쿠폰으로 채우는 나만의 지갑</SplashPrimary>
        <SplashSecondary>휴대폰쿠폰지갑</SplashSecondary>
      </SplashWrap>
    </>
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

