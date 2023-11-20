import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { items } from "~gql/schema/items"
import { CompareDate } from "~helpers/compare-date"
import { setCollectionWithImages } from "~store/slices/collections-with-images"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

import type { StoreJWT } from "./signin"

export const useCollectionWithImages = () => {
  const { logoutWithNavigate } = useLogout()

  const dispatch = useDispatch()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const [mutate, { data, error, loading }] = useLazyQuery(items, {
    defaultOptions: {
      fetchPolicy: "network-only"
    }
  })

  const getCollectionWithImages = async (collections: string, limit = 5) => {
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logoutWithNavigate()

      return
    }

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
      },
      onError: () => {
        navigateAndSetRedirect("/error")
      }
    })
  }

  return { data, error, loading, getCollectionWithImages }
}
