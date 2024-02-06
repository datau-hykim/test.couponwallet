import { JoinOtpCertPageProps } from 'src/pages/JoinPage/JoinOtpCertPage/index'
import CustomFormItems from 'src/components/react-hook-form/CustomFormItems'
import Modal from 'src/components/Common/Modal'
import { useModalStore } from 'src/store/zustand'

const JoinOtpCertPageView = ({
  registerAttribute,
  otpCertSubmit,
  otpCertRequest,
  handleSubmit,
}: JoinOtpCertPageProps) => {
  const { openAlert, openConfirm, closeModal } = useModalStore()
  return (
    <>
      <h1>JoinOtpCertPageView</h1>
      <h2>서비스를 이용하기 위해서 휴대폰 인증이 필요합니다.</h2>
      <CustomFormItems {...registerAttribute.pNumber} />
      <button onClick={handleSubmit(otpCertRequest)}>전송</button>
      <br />
      <CustomFormItems {...registerAttribute.certNumber} />
      <button onClick={handleSubmit(otpCertSubmit)}>다음</button>
      <p>미가입자의 경우 약관동의 화면으로 이동합니다.</p>
      <button onClick={() => openAlert({ title: 'test alert title', content: 'test content' })}>
        alert 열기
      </button>
      <button
        onClick={() =>
          openConfirm({
            title: 'test confirm title',
            content: 'test content',
            children: <>test children</>,
          })
        }
      >
        confirm 열기
      </button>
      <button onClick={closeModal}>모달 닫기</button>
      <Modal />
    </>
  )
}
export default JoinOtpCertPageView
