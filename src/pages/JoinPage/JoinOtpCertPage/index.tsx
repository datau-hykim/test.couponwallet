import React from 'react'
import JoinOtpCertPageView from 'src/pages/JoinPage/JoinOtpCertPage/view'
import { FormProvider, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form'
import useOtpCertForm from 'src/hooks/react-hook-form/FormItems/useOtpCertForm.hook'
import { JoinOtpCertFormItemsType, JoinOtpCertFormType } from 'src/types/react-hook-form'

export interface JoinOtpCertPageProps {
  registerAttribute: JoinOtpCertFormType
  otpCertRequest: SubmitHandler<{ pNumber: string }>
  otpCertSubmit: SubmitHandler<{ certNumber: string }>
  handleSubmit: UseFormHandleSubmit<JoinOtpCertFormItemsType>
}

const JoinOtpCertPage = () => {
  const { methods, registerAttribute } = useOtpCertForm()
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
      <JoinOtpCertPageView {...props} />
    </FormProvider>
  )
}

export default JoinOtpCertPage
