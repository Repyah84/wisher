import { useMutation } from "@apollo/client"

import { Storage } from "@plasmohq/storage"

import type { StoreJWT } from "~background/messages/auth"
import { addItemsToCollection } from "~gql/schema/input-item-to-collection"
import { CompareDate } from "~helpers/compare-date"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

export const useAddItemsToCollection = () => {
  const { logoutWithNavigate } = useLogout()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const [mutate, { data, error, loading }] = useMutation(addItemsToCollection)

  const setItemsToCollection = async (ids: string[], collection: string) => {
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logoutWithNavigate()

      return
    }

    return mutate({
      variables: {
        ids,
        collection
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

  return { data, error, loading, setItemsToCollection }
}
