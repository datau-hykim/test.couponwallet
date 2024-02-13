import MyMainPageView from 'src/pages/Mypage/MypageMainPage/view'
import VAC from 'react-vac'
import React from 'react'

export interface MyMainPageProps {}

const MyMainPage = () => {
  const props = {}
  return (
    <>
      <VAC name="MyMainPage" data={props} />
      <MyMainPageView {...props} />
    </>
  )
}
export default MyMainPage
