import { useMutation } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import type { StoreJWT } from "~background/messages/auth"
import { updateUserGQL } from "~gql/schema/input-user"
import type { UserInput } from "~gql/types/graphql"
import { CompareDate } from "~helpers/compare-date"
import { setUserSate } from "~store/slices/user"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

export const useUserUpdate = () => {
  const { logoutWithNavigate } = useLogout()

  const dispatch = useDispatch()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const [mutate, { data, error, loading }] = useMutation(updateUserGQL)

  const updateUser = async (input: UserInput, image?: File) => {
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logoutWithNavigate()

      return
    }

    return mutate({
      variables: {
        input,
        image
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      onCompleted: ({ user }) => {
        dispatch(setUserSate(user))
      },
      onError: () => {
        navigateAndSetRedirect("/error")
      }
    })
  }

  return { data, error, loading, updateUser }
}
