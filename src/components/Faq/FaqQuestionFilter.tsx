import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const FaqQuestionFilter = () => {
  // const FaqTabListItem = [
  //     {
  //         text: 'All',
  //         onClickFn: () => {
  //             setContentType(0)
  //             activeIdx &&
  //             queryClient.removeQueries({ queryKey: ['faqList', { ContentsType: 0 }], exact: true })
  //         },
  //         active: ContentType === 0,
  //     },
  //     {
  //         text: 'Sign in / Subscription',
  //         onClickFn: () => {
  //             setContentType(1)
  //             activeIdx &&
  //             queryClient.removeQueries({ queryKey: ['faqList', { ContentsType: 1 }], exact: true })
  //         },
  //         active: ContentType === 1,
  //     },
  //     {
  //         text: ' Account',
  //         onClickFn: () => {
  //             setContentType(2)
  //             activeIdx &&
  //             queryClient.removeQueries({ queryKey: ['faqList', { ContentsType: 2 }], exact: true })
  //         },
  //         active: ContentType === 2,
  //     },
  //     {
  //         text: 'Function',
  //         onClickFn: () => {
  //             setContentType(3)
  //             activeIdx &&
  //             queryClient.removeQueries({ queryKey: ['faqList', { ContentsType: 3 }], exact: true })
  //         },
  //         active: ContentType === 3,
  //     },
  // ]

  return (
    <FaqQuestionFilterWrap>
      <FaqFilterItem to={`/web/mypage}/help_center/faq/0`}>전체</FaqFilterItem>
      <FaqFilterItem to={`/web/mypage}/help_center/faq/1`}>가입 및 해지</FaqFilterItem>
      <FaqFilterItem to={`/web/mypage}/help_center/faq/2`}>핫딜</FaqFilterItem>
      <FaqFilterItem to={`/web/mypage}/help_center/faq/3`}>상시할인</FaqFilterItem>
      <FaqFilterItem to={`/web/mypage}/help_center/faq/4`}>쿠폰지갑</FaqFilterItem>
    </FaqQuestionFilterWrap>
  )
}

export default FaqQuestionFilter

const FaqQuestionFilterWrap = styled.div`
  width: 100%;
  border: 2px solid red;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`
const FaqFilterItem = styled(NavLink)`
  display: flex;
  border: 1px solid black;
  border-radius: 30px;
`
