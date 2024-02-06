import { useForm } from 'react-hook-form'
import { FormType, JoinOtpCertFormItemsType, JoinOtpCertFormType } from 'src/types/react-hook-form'
import { NumReplace, regExps, TelReplace } from 'src/utils/regExps_util'

const useOtpCertForm = () => {
  const methods = useForm<JoinOtpCertFormItemsType>({
    mode: 'onBlur',
    defaultValues: {
      pNumber: '',
      certNumber: '',
    },
  })
  const { setValue, watch } = methods

  const pNumberOnChangeHandler = (event: { target: { value: string } }) => {
    setValue('pNumber', TelReplace(event.target.value, 13), { shouldValidate: true })
  }
  const certNumberOnChangeHandler = (event: { target: { value: string } }) => {
    setValue('certNumber', NumReplace(event.target.value, 4), { shouldValidate: true })
  }
  const registerAttribute: JoinOtpCertFormType = {
    pNumber: {
      option: 'input' as FormType,
      placeholder: '휴대폰 번호 입력',
      type: 'tel',
      tag: 'pNumber',
      register_options: {
        required: watch('pNumber').length !== 0,
        minLength: 13,
        pattern: { value: regExps.telReg.pattern, message: '패턴 틀림' },
        onChange: pNumberOnChangeHandler,
        inputmode: 'numeric',
      },
    },
    certNumber: {
      option: 'input' as FormType,
      placeholder: '인증번호 입력',
      type: 'number',
      tag: 'certNumber',
      register_options: {
        required: watch('certNumber').length !== 0,
        minLength: 4,
        pattern: { value: regExps.numReg.pattern, message: '패턴 틀림' },
        onChange: certNumberOnChangeHandler,
        inputmode: 'numeric',
      },
    },
  }

  return {
    methods,
    registerAttribute,
  }
}
export default useOtpCertForm
