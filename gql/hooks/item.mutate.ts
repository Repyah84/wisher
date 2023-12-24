import { useMutation, type FetchResult } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import type { StoreJWT } from "~background/messages/auth"
import { itemInput } from "~gql/schema/input-item"
import type { ItemInput, ItemMutation } from "~gql/types/graphql"
import { CompareDate } from "~helpers/compare-date"
import { errorResponse } from "~store/actions/error"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

export interface ItemAddInputData {
  input: ItemInput
  image?: File
}

export const useItemMutate = () => {
  const { logoutWithNavigate } = useLogout()

  const dispatch = useDispatch()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const [mutate, { data, error, loading }] = useMutation(itemInput)

  const addItem = async (
    variables: ItemAddInputData
  ): Promise<FetchResult<ItemMutation>> => {
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logoutWithNavigate()

      return
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

        navigateAndSetRedirect("/error")
      }
    })
  }

  return { data, error, loading, addItem }
}
