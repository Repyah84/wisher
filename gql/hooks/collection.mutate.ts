import { useMutation } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { collectionUpdate } from "~gql/schema/input-collection"
import { CompareDate } from "~helpers/compare-date"
import { updateCollectionWithImagesName } from "~store/slices/collections-with-images"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

import type { StoreJWT } from "./signin"

export interface UpdateCollectionName {
  oldCollection: string
  newCollection: string
}

export const useCollectionUpdate = () => {
  const logout = useLogout()

  const dispatch = useDispatch()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const [mutate, { data, error, loading }] = useMutation(collectionUpdate)

  const updateCollectionName = async ({
    oldCollection,
    newCollection
  }: UpdateCollectionName) => {
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logout()
    }

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
          dispatch(
            updateCollectionWithImagesName({ oldCollection, newCollection })
          )
        }
      },
      onError: () => {
        navigateAndSetRedirect("/error")
      }
    })
  }

  return { data, error, loading, updateCollectionName }
}
