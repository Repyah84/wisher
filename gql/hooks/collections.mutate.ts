import { useMutation, type FetchResult } from "@apollo/client"

import { Storage } from "@plasmohq/storage"

import { collectionInput } from "~gql/schema/input-collections"
import type { UserCollectionsAddMutation } from "~gql/types/graphql"
import { CompareDate } from "~helpers/compare-date"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

import type { StoreJWT } from "./signin"

export const useCollectionsMutate = () => {
  const logout = useLogout()

  const [mutate, { data, error, loading }] = useMutation(collectionInput)

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const addCollection = async (
    collections: string[]
  ): Promise<FetchResult<UserCollectionsAddMutation>> => {
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logout()
    }

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
      },
      onError: () => {
        navigateAndSetRedirect("/error")
      }
    })
  }

  return { data, error, loading, addCollection }
}
