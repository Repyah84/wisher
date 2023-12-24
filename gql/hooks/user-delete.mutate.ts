import { useMutation } from "@apollo/client"

import { Storage } from "@plasmohq/storage"

import type { StoreJWT } from "~background/messages/auth"
import { userDeleteGQL } from "~gql/schema/input-user-delete"
import { CompareDate } from "~helpers/compare-date"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

export const useUserDelete = () => {
  const { logoutWithNavigate } = useLogout()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const [mutate, { data, error, loading }] = useMutation(userDeleteGQL)

  const deleteUser = async () => {
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logoutWithNavigate()

      return
    }

    return mutate({
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

  return { data, error, loading, deleteUser }
}
