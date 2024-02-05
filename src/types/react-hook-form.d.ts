import { Message, Validate, ValidationRule } from 'react-hook-form'

export type FormType = 'input'
export type RegisterOptions = Partial<{
  required: Message | ValidationRule<boolean>
  min?: ValidationRule<number | string>
  max?: ValidationRule<number | string>
  maxLength?: ValidationRule<number>
  minLength?: ValidationRule<number>
  pattern: { value: RegExp; message: string }
  validate?: Validate | Record<string, Validate>
  onChange?: (event: { target: { value: string } }) => void
  inputmode: 'numeric' | 'decimal'
}>
interface FormObjectType {
  placeholder: string
  tag: string
  type: string
  option: FormType
  register_options: RegisterOptions
}
interface JoinOtpCertFormType {
  pNumber: FormObjectType
  certNumber: FormObjectType
}

interface JoinOtpCertFormItemsType {
  pNumber: string
  certNumber: string
}
