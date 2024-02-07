import { useMatch } from 'react-router-dom'

const useMatchList = () => {
  const m_splash = useMatch('/:channel/splash')
  const m_intro = useMatch('/:channel/intro')
  const m_search = useMatch('/:channel/search')
  const m_search_result = useMatch('/:channel/search/result/:searchword')
  const m_main = useMatch('/:channel/main/:userId')
  const m_join = useMatch('/:channel/join')
  const m_join_terms = useMatch('/:channel/join/terms')
  const m_mypage = useMatch('/:channel/mypage/:userId')
  const m_purchase_history = useMatch('/:channel/mypage/coupon/:userId/purchase_history')
  const m_purchase_history_detail = useMatch(
    '/:channel/mypage/:userId/coupon/purchase_history/detail/:couponIdx',
  )
  const m_purchase_history_refund = useMatch(
    '/:channel/mypage/:userId/coupon/purchase_history/detail/refund_apply/:couponIdx',
  )
  const m_purchase_history_complete = useMatch(
    '/:channel/mypage/:userId/coupon/purchase_history/detail/apply_complete/:couponIdx',
  )
  const m_register_coupon = useMatch('/:channel/mypage/coupon/:userId/register_coupon')
  const m_register_coupon_image = useMatch(
    '/:channel/mypage/:userId/coupon/register_coupon/select_image',
  )
  const m_register_coupon_form = useMatch('/:channel/mypage/coupon/:userId/register_coupon/form')
  const m_notify_setting = useMatch('/:channel/mypage/coupon/:userId/notify_settings')
  const m_notice = useMatch('/:channel/mypage/:userId/help_center/notice')
  const m_faq = useMatch('/:channel/mypage/help_center/faq/:contentType')
  const m_qna = useMatch('/:channel/mypage/:userId/help_center/qna')
  const m_terms = useMatch('/:channel/mypage/:userId/help_center/terms')
  const m_cancel = useMatch('/:channel/mypage/:userId/help_center/cancel')
  const m_hotDeal = useMatch('/:channel/hotdeal')
  const m_always_discount = useMatch('/:channel/always_discount/:brand')
  const m_coupon_detail = useMatch('/:channel/coupon/detail/:couponIdx')
  const m_coupon_payment_status = useMatch('/:channel/coupon/payment/:paymentStatus/:couponIdx')

  return {
    m_always_discount,
    m_coupon_detail,
    m_coupon_payment_status,
    m_hotDeal,
    m_cancel,
    m_terms,
    m_splash,
    m_intro,
    m_search,
    m_search_result,
    m_main,
    m_join,
    m_join_terms,
    m_notice,
    m_faq,
    m_qna,
    m_register_coupon_form,
    m_notify_setting,
    m_mypage,
    m_purchase_history,
    m_purchase_history_detail,
    m_purchase_history_refund,
    m_purchase_history_complete,
    m_register_coupon,
    m_register_coupon_image,
  }
}
export default useMatchList
