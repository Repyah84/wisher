import { useMutation } from "@tanstack/react-query"
import request from "graphql-request"
import { useDispatch } from "react-redux"

import { items } from "~gql/schema/items"
import { setItems } from "~store/slices/items"

export const ItemsGraphQL = () => {
  const dispatch = useDispatch()

  const { data, isLoading, isError, isSuccess, mutate } = useMutation({
    mutationFn: (token: string) =>
      request(
        process.env.PLASMO_PUBLIC_API_GQL,
        items,
        {},
        {
          Authorization: `Bearer ${token}`
        }
      ),
    onSuccess: (data) => {
      dispatch(setItems(data.items.rows))
    }
  })

  return { data, isLoading, isError, isSuccess, mutate }
}
