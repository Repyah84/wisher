import { useLazyQuery } from "@apollo/client"
import { useDispatch, useSelector } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { items } from "~gql/schema/items"
import { CompareDate } from "~helpers/compare-date"
import { SortData } from "~models/sort-data"
import { resetItems, setItems } from "~store/slices/items"
import type { RootState } from "~store/wisher.store"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

import type { StoreJWT } from "./signin"

export const useGetItemsLazy = () => {
  const logout = useLogout()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

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
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logout()
    }

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
      },
      onError: () => {
        navigateAndSetRedirect("/error")
      }
    })
  }

  return { data, error, loading, getItems }
}
