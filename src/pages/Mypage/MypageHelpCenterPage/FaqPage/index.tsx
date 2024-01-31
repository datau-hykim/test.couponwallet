import FaqPageView from 'src/pages/Mypage/MypageHelpCenterPage/FaqPage/view'

export interface FaqPageProps {}

const FaqPage = () => {
  const props: FaqPageProps = {}

  const testObject = {
    title: 1,
    desc: 2,
    day: 3,
  }
  const { day, desc, title } = testObject
  return (
    <>
      {day}
      <FaqPageView {...props} />
    </>
  )
}
export default FaqPage
