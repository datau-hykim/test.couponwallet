import { useFormContext, UseFormReturn } from 'react-hook-form'

import { FormObjectType, FormType } from 'src/types/react-hook-form'

export type CustomFormItemsType = FormObjectType & {
  formContext: UseFormReturn
}
const componentMap: {
  [key in FormType]: ({
    formContext,
    tag,
    placeholder,
    register_options,
  }: CustomFormItemsType) => JSX.Element
} = {
  input: ({ formContext, tag, placeholder, type, register_options }) => (
    <input {...formContext.register(tag, register_options)} placeholder={placeholder} type={type} />
  ),
}

const CustomFormItems = (props: FormObjectType) => {
  const formContext = useFormContext()
  const Component = componentMap[props.option]
  return <Component {...props} formContext={formContext} />
}

export default CustomFormItems
