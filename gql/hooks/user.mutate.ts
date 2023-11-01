import { useMutation } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { updateUserGQL } from "~gql/schema/input-user"
import type { UserInput } from "~gql/types/graphql"
import { setUserSate } from "~store/slices/user"

import type { StoreJWT } from "./signin"

export const useUserUpdate = () => {
  const storage = new Storage({ area: "local" })

  const dispatch = useDispatch()

  const [mutate, { data, error, loading }] = useMutation(updateUserGQL)

  const updateUser = async (input: UserInput, image?: File) => {
    const { token } = await storage.get<StoreJWT>("JWT")

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
      }
    })
  }

  return { data, error, loading, updateUser }
}
