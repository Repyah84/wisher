import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { search } from "~gql/schema/search"
import { CompareDate } from "~helpers/compare-date"
import { resetSearchItems, setSearchItems } from "~store/slices/search"
import { useLogout } from "~views/hooks/logout"

import type { StoreJWT } from "./signin"

export const useItemSearch = () => {
  const logout = useLogout()

  const dispatch = useDispatch()

  const [mutate, { data, error, loading }] = useLazyQuery(search, {
    defaultOptions: {
      fetchPolicy: "network-only"
    }
  })

  const getItems = async (
    search: string,
    offset = 0,
    limit = 10,
    resetData = false,
    collections?: string | [string]
  ) => {
    if (!search) {
      return
    }
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logout()
    }

    return mutate({
      variables: {
        search,
        limit,
        offset,
        collections
      },
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      onCompleted: ({ searchItems }) => {
        if (resetData) {
          dispatch(resetSearchItems())
        }

        dispatch(
          setSearchItems({ count: searchItems.count, items: searchItems.rows })
        )
      }
    })
  }

  return { data, error, loading, getItems }
}
