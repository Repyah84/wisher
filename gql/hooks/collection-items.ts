import { useLazyQuery } from "@apollo/client"
import { useDispatch, useSelector } from "react-redux"

import { Storage } from "@plasmohq/storage"

import type { StoreJWT } from "~background/messages/auth"
import { items } from "~gql/schema/items"
import { CompareDate } from "~helpers/compare-date"
import { SortData } from "~models/sort-data"
import { resetCollection, setCollection } from "~store/slices/collection"
import type { RootState } from "~store/wisher.store"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

export const useGetCollectionItems = () => {
  const { logoutWithNavigate } = useLogout()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const sortParam = useSelector(({ sort: { data } }: RootState) => data)

  const dispatch = useDispatch()

  const [mutate, { data, error, loading }] = useLazyQuery(items, {
    defaultOptions: {
      fetchPolicy: "network-only"
    }
  })

  const getCollectionItems = async (
    collectionId: string,
    limit = 10,
    resetStore = false,
    startAfterItemId?: string
  ) => {
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logoutWithNavigate()

      return
    }

    const sort = SortData.getSortParma(sortParam)

    return mutate({
      variables: {
        collectionId,
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

        dispatch(setCollection({ count, items, collectionId }))
      },
      onError: () => {
        navigateAndSetRedirect("/error")
      }
    })
  }

  return { data, error, loading, getCollectionItems }
}
