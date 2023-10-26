import { useMutation, type FetchResult } from "@apollo/client"

import { Storage } from "@plasmohq/storage"

import { itemInput } from "~gql/schema/input-item"
import type { ItemInput, ItemMutation } from "~gql/types/graphql"

import type { StoreJWT } from "./signin"

export interface ItemAddInputData {
  input: ItemInput
  image?: File
}

export const useItemMutate = () => {
  const storage = new Storage({ area: "local" })

  const [mutate, { data, error, loading }] = useMutation(itemInput)

  const addItem = async (
    variables: ItemAddInputData
  ): Promise<FetchResult<ItemMutation>> => {
    const { token } = await storage.get<StoreJWT>("JWT")

    return mutate({
      variables,
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    })
  }

  return { data, error, loading, addItem }
}
