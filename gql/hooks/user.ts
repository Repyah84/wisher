import { useMutation } from "@tanstack/react-query"
import request from "graphql-request"
import { useDispatch } from "react-redux"

import { user } from "~gql/schema/user"
import { toggleUserSate } from "~store/slices/user"

export const useUserGraphQL = () => {
  const dispatch = useDispatch()

  const { data, isLoading, isError, isSuccess, mutate } = useMutation({
    mutationFn: (token: string) =>
      request(
        process.env.PLASMO_PUBLIC_API_GQL,
        user,
        {},
        {
          Authorization: `Bearer ${token}`
        }
      ),
    onSuccess: (data) => {
      dispatch(toggleUserSate(data.user))
    }
  })

  return { data, isLoading, isError, isSuccess, mutate }
}
