import { useMutation } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { collectionUpdate } from "~gql/schema/input-collection"
import { updateCollectionNameState } from "~store/slices/collections-with-images"

import type { StoreJWT } from "./signin"

export interface UpdateCollectionName {
  oldCollection: string
  newCollection: string
}

export const useCollectionUpdate = () => {
  const storage = new Storage({ area: "local" })

  const dispatch = useDispatch()

  const [mutate, { data, error, loading }] = useMutation(collectionUpdate)

  const updateCollectionName = async ({
    oldCollection,
    newCollection
  }: UpdateCollectionName) => {
    const { token } = await storage.get<StoreJWT>("JWT")

    return mutate({
      variables: {
        oldCollection,
        newCollection
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      onCompleted: ({ renameCollection: { status } }) => {
        if (status) {
          dispatch(updateCollectionNameState({ oldCollection, newCollection }))
        }
      }
    })
  }

  return { data, error, loading, updateCollectionName }
}
