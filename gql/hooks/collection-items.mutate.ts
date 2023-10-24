import { useMutation } from "@apollo/client"

import { Storage } from "@plasmohq/storage"

import { addItemsToCollection } from "~gql/schema/input-item-to-collection"

import type { StoreJWT } from "./signin.mutate"

const storage = new Storage({ area: "local" })

console.log("IN_HOOKS", storage)

export const useAddItemsToCollection = () => {
  const [mutate, { data, error, loading }] = useMutation(addItemsToCollection)

  const setItemsToCollection = async (ids: string[], collection: string) => {
    const { token } = await storage.get<StoreJWT>("JWT")

    return mutate({
      variables: {
        ids,
        collection
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    })
  }

  return { data, error, loading, setItemsToCollection }
}
