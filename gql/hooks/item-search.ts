import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { search } from "~gql/schema/search"
import { resetSearchItems, setSearchItems } from "~store/slices/search"

import type { StoreJWT } from "./signin"

export const useItemSearch = () => {
  const storage = new Storage({ area: "local" })

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

    const { token } = await storage.get<StoreJWT>("JWT")

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
