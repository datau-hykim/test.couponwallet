import React from 'react'
import JoinOtpCertPageView from 'src/pages/JoinPage/JoinOtpCertPage/view'
import { FormProvider, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import useOtpCertForm from 'src/hooks/react-hook-form/useOtpCertForm.hook'
import { JoinOtpCertFormItemsType, JoinOtpCertFormType } from 'src/types/react-hook-form'
import VAC from 'react-vac'
import InfiniteScroll from 'src/components/Common/InfiniteScroll'
import useInfiniteScrollQuery from 'src/hooks/react-query/useInfiniteQuery.hook.ts/useCouponInfiniteScrollQuery.hook'

export interface JoinOtpCertPageProps {
  registerAttribute: JoinOtpCertFormType
  otpCertRequest: SubmitHandler<{ pNumber: string }>
  otpCertSubmit: SubmitHandler<{ certNumber: string }>
  handleSubmit: UseFormHandleSubmit<JoinOtpCertFormItemsType>
}

const JoinOtpCertPage = () => {
  const { methods, registerAttribute } = useOtpCertForm()
  const InfiniteScrollQueryItems = useInfiniteScrollQuery({ option: 'coupon' })
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
      <InfiniteScroll InfiniteScrollQueryItems={InfiniteScrollQueryItems}>
        {InfiniteScrollQueryItems.data?.pages.map(
          (element) =>
            element?.contents?.map((elm: any, index: number) => (
              <div style={{ border: '1px solid red', height: '30px' }} onClick={() => {}} />
            )),
        )}
      </InfiniteScroll>
    </FormProvider>
  )
}

export default JoinOtpCertPage
