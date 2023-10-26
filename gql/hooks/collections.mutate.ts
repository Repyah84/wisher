import { useMutation, type FetchResult } from "@apollo/client"

import { Storage } from "@plasmohq/storage"

import { collectionInput } from "~gql/schema/input-collections"
import type { UserCollectionsAddMutation } from "~gql/types/graphql"

import type { StoreJWT } from "./signin"

export const useCollectionsMutate = () => {
  const storage = new Storage({ area: "local" })

  const [mutate, { data, error, loading }] = useMutation(collectionInput)

  const addCollection = async (
    collections: string[]
  ): Promise<FetchResult<UserCollectionsAddMutation>> => {
    const { token } = await storage.get<StoreJWT>("JWT")

    return mutate({
      variables: {
        input: {
          collections
        }
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    })
  }

  return { data, error, loading, addCollection }
}
