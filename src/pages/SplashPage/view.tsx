import { SplashPageProps } from 'src/pages/SplashPage/index'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useBottomSheet } from 'src/hooks/useBottomSheet.hook'
import BottomSheetHeader from 'src/components/layout/BottomSheetHeader'

export const MIN_Y = 60 // 바텀시트가 최대로 높이 올라갔을 때의 y 값
export const MAX_Y = window.innerHeight - 80 // 바텀시트가 최소로 내려갔을 때의 y 값

const SplashPageView = ({}: SplashPageProps) => {
  return (
    <>
      {/*<BottomSheet />*/}
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

const BottomSheetWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  top: ${MAX_Y}px;
  left: 0;
  right: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: calc((var(--vh, 1vh) * 100) - ${MIN_Y}px);

  transition: transform 150ms ease-out;
`

const BottomSheetContent = styled.div`
  overflow: auto;
  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
  //-webkit-overflow-scrkolling: touch;
  touch-action: pan-y;
  font-size: 20px;
`

const BottomSheet = () => {
  const { sheet, content } = useBottomSheet()
  const test =
    'hjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadfhjioaihasdfsadf'
  return (
    <BottomSheetWrapper ref={sheet}>
      <BottomSheetHeader />
      <BottomSheetContent ref={content}>
        {test}
        {test}
        {test}
        {test}
        {test}
        {test}
        {test}
        {test}
        {test}
        {test}
        {test}
        {test}
      </BottomSheetContent>
    </BottomSheetWrapper>
  )
}
