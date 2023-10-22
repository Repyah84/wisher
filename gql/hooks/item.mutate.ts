import { useMutation } from "@apollo/client"

import { Storage } from "@plasmohq/storage"

import { itemAdd } from "~gql/schema/item-add"
import type { ItemInput } from "~gql/types/graphql"

import type { StoreJWT } from "./signin.mutate"

export interface ItemAddInputData {
  input: ItemInput
  image?: File
}

const storage = new Storage({ area: "local" })

export const useItemMutate = () => {
  const [mutate, { data, error, loading }] = useMutation(itemAdd)

  const addItem = (variables: ItemAddInputData) => {
    storage.get<StoreJWT>("JWT").then(({ token }) => {
      mutate({
        variables,
        context: {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      })
    })
  }

  return { data, error, loading, addItem }
}
