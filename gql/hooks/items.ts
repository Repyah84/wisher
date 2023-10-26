import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { items } from "~gql/schema/items"
import { setItems } from "~store/slices/items"

import type { StoreJWT } from "./signin"

export const useGetItemsLazy = () => {
  const storage = new Storage({ area: "local" })

  const dispatch = useDispatch()

  const [mutate, { data, error, loading }] = useLazyQuery(items, {
    defaultOptions: {
      fetchPolicy: "network-only"
    }
  })

  const getItems = async (limit = 10, startAfterItemId?: string) => {
    const { token } = await storage.get<StoreJWT>("JWT")

    return mutate({
      variables: {
        limit,
        startAfterItemId
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      onCompleted: ({ items: { rows: items, count } }) => {
        dispatch(setItems({ count, items }))
      }
    })
  }

  return { data, error, loading, getItems }
}
