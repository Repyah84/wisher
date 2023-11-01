import { useMutation } from "@apollo/client"

import { Storage } from "@plasmohq/storage"

import { userDeleteGQL } from "~gql/schema/input-user-delete"

import type { StoreJWT } from "./signin"

export const useUserDelete = () => {
  const storage = new Storage({ area: "local" })

  const [mutate, { data, error, loading }] = useMutation(userDeleteGQL)

  const deleteUser = async () => {
    const { token } = await storage.get<StoreJWT>("JWT")

    return mutate({
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    })
  }

  return { data, error, loading, deleteUser }
}
