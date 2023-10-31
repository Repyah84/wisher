import { useLazyQuery } from "@apollo/client"
import { useDispatch, useSelector } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { items } from "~gql/schema/items"
import { SortData } from "~models/sort-data"
import { resetCollection, setCollection } from "~store/slices/collection"
import type { RootState } from "~store/wisher.store"

import type { StoreJWT } from "./signin"

export const useGetCollectionItems = () => {
  const storage = new Storage({ area: "local" })

  const sortParam = useSelector(({ sort: { data } }: RootState) => data)

  const dispatch = useDispatch()

  const [mutate, { data, error, loading }] = useLazyQuery(items, {
    defaultOptions: {
      fetchPolicy: "network-only"
    }
  })

  const getCollectionItems = async (
    collections: string,
    limit = 10,
    resetStore = false,
    startAfterItemId?: string
  ) => {
    const { token } = await storage.get<StoreJWT>("JWT")

    const sort = SortData.getSortParma(sortParam)

    return mutate({
      variables: {
        collections,
        limit,
        startAfterItemId,
        sort
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      onCompleted: ({ items: { count, rows: items } }) => {
        if (resetStore) {
          dispatch(resetCollection())
        }

        dispatch(setCollection({ count, items, name: collections }))
      }
    })
  }

  return { data, error, loading, getCollectionItems }
}
