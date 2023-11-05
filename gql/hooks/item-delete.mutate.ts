import { useMutation, type FetchResult } from "@apollo/client"

import { Storage } from "@plasmohq/storage"

import { deleteItemGql } from "~gql/schema/delete-item"
import type { UserCollectionsAddMutation } from "~gql/types/graphql"
import { CompareDate } from "~helpers/compare-date"
import { useLogout } from "~views/hooks/logout"

import type { StoreJWT } from "./signin"

export const useItemDelete = () => {
  const logout = useLogout()

  const [mutate, { data, error, loading }] = useMutation(deleteItemGql)

  const deleteWisher = async (
    deleteItemId: string
  ): Promise<FetchResult<UserCollectionsAddMutation>> => {
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logout()
    }

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
