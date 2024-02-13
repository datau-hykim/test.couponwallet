import React, { ReactNode } from 'react'
import JoinOtpCertPageView from 'src/pages/JoinPage/JoinOtpCertPage/view'
import { FormProvider, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import useOtpCertForm from 'src/hooks/react-hook-form/useOtpCertForm.hook'
import { JoinOtpCertFormItemsType, JoinOtpCertFormType } from 'src/types/react-hook-form'
import VAC from 'react-vac'
import useInfiniteScrollQuery from 'src/hooks/react-query/useCustomInfiniteQuery.hook'

export interface JoinOtpCertPageProps {
  registerAttribute: JoinOtpCertFormType
  otpCertRequest: SubmitHandler<{ pNumber: string }>
  otpCertSubmit: SubmitHandler<{ certNumber: string }>
  handleSubmit: UseFormHandleSubmit<JoinOtpCertFormItemsType>
}

const JoinOtpCertPage = () => {
  const { methods, registerAttribute } = useOtpCertForm()
  const { data, setTarget } = useInfiniteScrollQuery<any, any>({
    option: 'coupon',
  })
  const { handleSubmit } = methods
  const otpCertRequest: SubmitHandler<{ pNumber: string }> = (data) => {
    const submitData = {}
    console.log('data.pNumber', data.pNumber)
  }
  const otpCertSubmit: SubmitHandler<{ certNumber: string }> = (data) => {
    console.log('data.certNumber', data.certNumber)
    const submitData = {}
  }

  const props: JoinOtpCertPageProps = {
    registerAttribute,
    otpCertRequest,
    otpCertSubmit,
    handleSubmit,
  }
  return (
    <FormProvider {...methods}>
      <VAC name="JoinOtpCertPage" data={props} />
      <JoinOtpCertPageView {...props} />
      <>
        {data?.pages.map(
          (element) =>
            (element as any)?.contents.map((elm: any) => (
              <div style={{ width: '100%', height: '70px', border: '1px solid blue' }} />
            )),
        )}
        <div ref={setTarget}>바닥</div>,
      </>
    </FormProvider>
  )
}

export default JoinOtpCertPage
