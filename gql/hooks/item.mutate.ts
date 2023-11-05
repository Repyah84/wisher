import { useMutation, type FetchResult } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { itemInput } from "~gql/schema/input-item"
import type { ItemInput, ItemMutation } from "~gql/types/graphql"
import { CompareDate } from "~helpers/compare-date"
import { errorResponse } from "~store/actions/error"
import { useLogout } from "~views/hooks/logout"

import type { StoreJWT } from "./signin"

export interface ItemAddInputData {
  input: ItemInput
  image?: File
}

export const useItemMutate = () => {
  const logout = useLogout()

  const dispatch = useDispatch()

  const [mutate, { data, error, loading }] = useMutation(itemInput)

  const addItem = async (
    variables: ItemAddInputData
  ): Promise<FetchResult<ItemMutation>> => {
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logout()
    }

    return mutate({
      variables,
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      onError: () => {
        dispatch(errorResponse)
      }
    })
  }

  return { data, error, loading, addItem }
}
