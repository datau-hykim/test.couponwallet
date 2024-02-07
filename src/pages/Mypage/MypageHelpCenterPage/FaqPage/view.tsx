import { FaqPageProps } from 'src/pages/Mypage/MypageHelpCenterPage/FaqPage/index'
import FaqQuestionFilter from 'src/components/Faq/FaqQuestionFilter'
import FaqAccordion from 'src/components/Faq/FaqAccordion'

const FaqPageView = ({}: FaqPageProps) => {
  return (
    <>
      <FaqQuestionFilter />
      <FaqAccordion />
    </>
  )
}
export default FaqPageView
