import { useMutation } from "@apollo/client"

import { Storage } from "@plasmohq/storage"

import { userDeleteGQL } from "~gql/schema/input-user-delete"
import { CompareDate } from "~helpers/compare-date"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

import type { StoreJWT } from "./signin"

export const useUserDelete = () => {
  const logout = useLogout()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const [mutate, { data, error, loading }] = useMutation(userDeleteGQL)

  const deleteUser = async () => {
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logout()
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
