import SplashPage from 'src/pages/SplashPage'
import IntroPage from 'src/pages/IntroPage'
import SearchPage from 'src/pages/SearchPage'
import SearchMainPage from 'src/pages/SearchPage/SearchMainPage'
import SearchResultPage from 'src/pages/SearchPage/SearchResultPage'
import MainPage from 'src/pages/MainPage'
import JoinOtpCertPage from 'src/pages/JoinPage/JoinOtpCertPage'
import JoinTermsPage from 'src/pages/JoinPage/JoinTermsPage'
import MyMainPage from 'src/pages/Mypage/MypageMainPage'
import PurchaseHistoryPage from 'src/pages/Mypage/MypageCouponPage/PurchaseHistoryPage'
import PurchaseHistoryDetailPage from 'src/pages/Mypage/MypageCouponPage/PurchaseHistoryPage/PurchaseHistoryDetailPage'
import PurchaseHistoryRefundPage from 'src/pages/Mypage/MypageCouponPage/PurchaseHistoryPage/PurchaseHistoryRefundPage'
import PurchaseHistoryApplyCompletePage from 'src/pages/Mypage/MypageCouponPage/PurchaseHistoryPage/PurchaseHistoryApplyCompletePage'

import RegisterCouponMainPage from 'src/pages/Mypage/MypageCouponPage/RegCounponPage/RegCouponMainPage'
import RegisterCouponSelectImagePage from 'src/pages/Mypage/MypageCouponPage/RegCounponPage/RegCouponGalleryPage'
import RegisterCouponFormPage from 'src/pages/Mypage/MypageCouponPage/RegCounponPage/RegCouponFormPage'
import NotifySettingsPage from 'src/pages/Mypage/MypageCouponPage/NotifySettingsPage'
import NoticePage from 'src/pages/Mypage/MypageHelpCenterPage/NoticePage'
import FaqPage from 'src/pages/Mypage/MypageHelpCenterPage/FaqPage'
import QnaPage from 'src/pages/Mypage/MypageHelpCenterPage/QnaPage'
import TermsPage from 'src/pages/Mypage/MypageHelpCenterPage/TermsPage'
import CancelPage from 'src/pages/Mypage/MypageHelpCenterPage/CancelPage'
import HotDealPage from 'src/pages/HotDealPage'
import AlwaysDiscountPage from 'src/pages/AlwaysDiscountPage'
import CouponDetailPage from 'src/pages/CouponDetailPage'
import CouponPaymentPage from 'src/pages/CouponPaymentPage'
import { createBrowserRouter, redirect } from 'react-router-dom'
import PageLayout from 'src/layout/PageLayout'
import ErrorBoundaryPage from 'src/router/ErrorBoundaryPage'
import { PageLoader } from 'src/router/routerLoader'

export const routes = [
  {
    // 스플래시
    path: 'splash',
    element: <SplashPage />,
  },
  {
    // 인트로
    path: 'intro',
    element: <IntroPage />,
  },
  {
    // 쿠폰 검색창
    path: 'search',
    element: <SearchPage />,
    children: [
      // 검색 메인
      { path: '', element: <SearchMainPage />, index: true },
      // 검색 결과
      { path: 'result/:searchword', element: <SearchResultPage /> },
    ],
  },
  {
    // 메인 화면
    path: 'main/:userId',
    element: <MainPage />,
  },
  {
    // 로그인 및 가입
    path: 'join',
    children: [
      // 휴대폰 인증
      { path: '', element: <JoinOtpCertPage />, index: true },
      // 약관 동의
      { path: 'terms', element: <JoinTermsPage /> },
    ],
  },
  {
    // 마이페이지
    path: 'mypage/:userId',
    children: [
      // 마이페이지 메인
      { path: '', element: <MyMainPage />, index: true },
      {
        path: 'coupon',
        children: [
          {
            path: 'purchase_history',
            children: [
              // 구매 내역
              { path: '', element: <PurchaseHistoryPage />, index: true },
              // 구매 상세
              { path: 'detail/:couponIdx', element: <PurchaseHistoryDetailPage /> },
              // 환불 신청
              { path: 'refund_apply/:couponIdx', element: <PurchaseHistoryRefundPage /> },
              // 환불 신청, 구매 취소 완료
              { path: 'apply_complete/:couponIdx', element: <PurchaseHistoryApplyCompletePage /> },
            ],
          },
          // 직접 등록한 쿠폰
          {
            path: 'register_coupon',
            children: [
              // 쿠폰 등록 메인
              { path: 'main', element: <RegisterCouponMainPage />, index: true },
              // 이미지 선택
              { path: 'select_image', element: <RegisterCouponSelectImagePage /> },
              // 쿠폰 직접 등록
              { path: 'form', element: <RegisterCouponFormPage /> },
            ],
          },
          // 알림 설정
          { path: 'notify_settings', element: <NotifySettingsPage /> },
        ],
      },
      {
        path: 'help_center',
        children: [
          // 공지사항
          { path: 'notice', element: <NoticePage />, index: true },
          // 자주 묻는 질문
          { path: 'faq', element: <FaqPage /> },
          // Qna
          { path: 'qna', element: <QnaPage /> },
          // 약관 및 정책
          { path: 'terms', element: <TermsPage /> },
          // 서비스 해지
          { path: 'cancel', element: <CancelPage /> },
        ],
      },
    ],
  },
  {
    // 핫딜
    path: 'hot_deal',
    element: <HotDealPage />,
  },
  {
    // 상시 할인 ) brandType?: all, brandname
    path: 'always_discount/:brand',
    element: <AlwaysDiscountPage />,
  },
  {
    // 쿠폰 상세
    path: 'coupon/detail/:couponIdx',
    element: <CouponDetailPage />,
  },
  {
    // 쿠폰 결제 상태 ) statusType: success,fail
    path: 'coupon/payment/:paymentStatus/:couponIdx',
    element: <CouponPaymentPage />,
  },
]

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    path: '/:channel',
    loader: PageLoader,
    children: routes,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: '*',
    loader: async () => {
      return redirect('/web/splash')
    },
  },
])
