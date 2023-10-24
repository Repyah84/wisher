import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { user } from "~gql/schema/user"
import { toggleUserSate } from "~store/slices/user"

import type { StoreJWT } from "./signin.mutate"

const storage = new Storage({ area: "local" })

export const useGetUserLazy = () => {
  const dispatch = useDispatch()

  const [mutate, { data, loading, error }] = useLazyQuery(user, {
    defaultOptions: {
      fetchPolicy: "network-only"
    }
  })

  const getUser = async () => {
    const { token } = await storage.get<StoreJWT>("JWT")

    return mutate({
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      onCompleted: (data) => {
        dispatch(toggleUserSate(data.user))
      }
    })
  }

  return { getUser, data, loading, error }
}
