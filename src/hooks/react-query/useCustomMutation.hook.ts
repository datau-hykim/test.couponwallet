import { fetch } from 'src/service/api/fetcher'
import { useMutation } from '@tanstack/react-query'
import { useMutationOptionInterface, useMutationOptionType } from 'src/types/react-query'

const useCustomMutation = <T, U>({ option }: { option: useMutationOptionType }) => {
  const queryOptions: {
    [key in useMutationOptionType]: useMutationOptionInterface<T, U>
  } = {
    cancel: cancelQueryOption<T, U>(),
    join: cancelQueryOption<T, U>(),
  }
  const queryOption = queryOptions[option as useMutationOptionType]
  const { mutate, mutateAsync, isPending, isSuccess } = useMutation(queryOption)

  return { mutate, mutateAsync, isSuccess, isPending }
}
const cancelQueryOption = <T, U>() => ({
  mutationKey: ['cancel'],
  mutationFn: async (data: T) => fetch.post<T, U>('', 1020, data),
})
export { useCustomMutation, cancelQueryOption }
