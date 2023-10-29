import { useMutation, type FetchResult } from "@apollo/client"

import { Storage } from "@plasmohq/storage"

import { deleteItemGql } from "~gql/schema/delete-item"
import type { UserCollectionsAddMutation } from "~gql/types/graphql"

import type { StoreJWT } from "./signin"

export const useItemDelete = () => {
  const storage = new Storage({ area: "local" })

  const [mutate, { data, error, loading }] = useMutation(deleteItemGql)

  const deleteWisher = async (
    deleteItemId: string
  ): Promise<FetchResult<UserCollectionsAddMutation>> => {
    const { token } = await storage.get<StoreJWT>("JWT")

    return mutate({
      variables: {
        deleteItemId
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    })
  }

  return { data, error, loading, deleteWisher }
}
