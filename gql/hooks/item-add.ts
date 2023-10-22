import { useMutation } from "@tanstack/react-query"
import request from "graphql-request"

import { itemAdd } from "~gql/schema/item-add"
import type { ItemInput } from "~gql/types/graphql"

interface ItemAddInputData {
  token: string
  input: ItemInput
  image?: File
}

export const ItemAddGraphQL = () => {
  const { data, isLoading, isError, isSuccess, mutate } = useMutation({
    mutationFn: ({ token, input, image }: ItemAddInputData) =>
      request(
        process.env.PLASMO_PUBLIC_API_GQL,
        itemAdd,
        { input, image: image },
        {
          Authorization: `Bearer ${token}`
        }
      )
  })

  return { data, isLoading, isError, isSuccess, mutate }
}
