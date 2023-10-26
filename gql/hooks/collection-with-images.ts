import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { items } from "~gql/schema/items"
import { setCollectionWithImages } from "~store/slices/collections-with-images"

import type { StoreJWT } from "./signin"

export const useCollectionWithImages = () => {
  const storage = new Storage({ area: "local" })

  const dispatch = useDispatch()

  const [mutate, { data, error, loading }] = useLazyQuery(items, {
    defaultOptions: {
      fetchPolicy: "network-only"
    }
  })

  const getCollectionWithImages = async (collections: string, limit = 5) => {
    const { token } = await storage.get<StoreJWT>("JWT")

    return mutate({
      variables: {
        collections,
        limit
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      onCompleted: (data) => {
        dispatch(
          setCollectionWithImages({
            title: collections,
            images: data.items.rows.map(({ imageUrl }) => imageUrl),
            count: data.items.count
          })
        )
      }
    })
  }

  return { data, error, loading, getCollectionWithImages }
}
