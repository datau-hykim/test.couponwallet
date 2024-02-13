import { FaqPageProps } from 'src/pages/Mypage/MypageHelpCenterPage/FaqPage/index'
import FaqQuestionFilter from 'src/components/pages/faq/FaqQuestionFilter'
import FaqAccordion from 'src/components/pages/faq/FaqAccordion'

const FaqPageView = ({}: FaqPageProps) => {
  return (
    <>
      <FaqQuestionFilter />
      <FaqAccordion />
    </>
  )
}
export default FaqPageView
