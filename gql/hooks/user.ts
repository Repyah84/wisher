import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { user } from "~gql/schema/user"
import { setUserSate } from "~store/slices/user"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

import type { StoreJWT } from "./signin"

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

    console.log("getUser", token)

    return mutate({
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      onCompleted: (data) => {
        dispatch(setUserSate(data.user))
      },
      onError: () => {
        navigateAndSetRedirect("/error")
      }
    })
  }

  return { getUser, data, loading, error }
}
