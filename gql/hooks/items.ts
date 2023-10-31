import { useLazyQuery } from "@apollo/client"
import { useDispatch, useSelector } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { items } from "~gql/schema/items"
import { SortData } from "~models/sort-data"
import { resetItems, setItems } from "~store/slices/items"
import type { RootState } from "~store/wisher.store"

import type { StoreJWT } from "./signin"

export const useGetItemsLazy = () => {
  const storage = new Storage({ area: "local" })

  const sortParam = useSelector(({ sort: { data } }: RootState) => data)

  const dispatch = useDispatch()

  const [mutate, { data, error, loading }] = useLazyQuery(items, {
    defaultOptions: {
      fetchPolicy: "network-only"
    }
  })

  const getItems = async (
    limit = 10,
    resetStore = false,
    startAfterItemId?: string,
    collections?: string | [string]
  ) => {
    const { token } = await storage.get<StoreJWT>("JWT")

    const sort = SortData.getSortParma(sortParam)

    return mutate({
      variables: {
        limit,
        sort,
        collections,
        startAfterItemId
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      onCompleted: ({ items: { rows: items, count } }) => {
        if (resetStore) {
          dispatch(resetItems())
        }

        dispatch(setItems({ count, items }))
      }
    })
  }

  return { data, error, loading, getItems }
}
