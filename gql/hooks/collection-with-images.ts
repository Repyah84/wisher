import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { collectionsWithImages } from "~gql/schema/collection-with-images"
import { setCollectionsWithImages } from "~store/slices/collections-with-images"

import type { StoreJWT } from "./signin.mutate"

const storage = new Storage({ area: "local" })

export const useCollectionWithImages = () => {
  const dispatch = useDispatch()

  const [mutate, { data, error, loading }] = useLazyQuery(
    collectionsWithImages,
    {
      defaultOptions: {
        fetchPolicy: "network-only"
      }
    }
  )

  const getCollectionWithImages = async (collections: string[]) => {
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
        dispatch(setCollectionsWithImages(data.collectionsWithImages))
      }
    })
  }

  return { data, error, loading, getCollectionWithImages }
}
