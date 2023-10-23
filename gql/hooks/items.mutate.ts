import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { items } from "~gql/schema/items"
import { setItems } from "~store/slices/items"

import type { StoreJWT } from "./signin.mutate"

const storage = new Storage({ area: "local" })

export const useGetItemsLazy = () => {
  const dispatch = useDispatch()

  const [mutate, { data, error, loading }] = useLazyQuery(items, {
    defaultOptions: {
      fetchPolicy: "network-only"
    }
  })

  const getItems = () => {
    storage.get<StoreJWT>("JWT").then(({ token }) => {
      mutate({
        context: {
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
        onCompleted: (data) => {
          dispatch(setItems(data.items.rows))
        }
      })
    })
  }

  return { data, error, loading, getItems }
}
