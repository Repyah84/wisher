import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { items } from "~gql/schema/items"
import { resetCollection, setCollection } from "~store/slices/collection"

import type { StoreJWT } from "./signin"

export const useGetCollectionItems = () => {
  const storage = new Storage({ area: "local" })

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

    return mutate({
      variables: {
        collections,
        limit,
        startAfterItemId
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

        dispatch(setCollection({ count, items }))
      }
    })
  }

  return { data, error, loading, getCollectionItems }
}
