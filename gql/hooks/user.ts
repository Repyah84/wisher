import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import type { StoreJWT } from "~background/messages/auth"
import { user } from "~gql/schema/user"
import { setUserSate } from "~store/slices/user"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

export const useGetUserLazy = () => {
  const dispatch = useDispatch()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const [mutate, { data, loading, error }] = useLazyQuery(user, {
    defaultOptions: {
      fetchPolicy: "network-only"
    }
  })

  const getUser = async () => {
    const storage = new Storage({ area: "local" })

    const { token } = await storage.get<StoreJWT>("JWT")

    return mutate({
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      onCompleted: (data) => {
        dispatch(setUserSate(data.user))
      },
      onError: (error) => {
        navigateAndSetRedirect("/error")
      }
    })
  }

  return { getUser, data, loading, error }
}
