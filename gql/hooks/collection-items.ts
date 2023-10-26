import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { items } from "~gql/schema/items"
import { setCollection } from "~store/slices/collection"

import type { StoreJWT } from "./signin"

export const useGetCollectionItems = () => {
  const storage = new Storage({ area: "local" })

  const dispatch = useDispatch()

  const [mutate, { data, error, loading }] = useLazyQuery(items, {
    defaultOptions: {
      fetchPolicy: "network-only"
    }
  })

  const getCollectionItems = async (collections: string) => {
    const { token } = await storage.get<StoreJWT>("JWT")

    return mutate({
      variables: {
        collections
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      onCompleted: (data) => {
        dispatch(setCollection(data.items.rows))
      }
    })
  }

  return { data, error, loading, getCollectionItems }
}
