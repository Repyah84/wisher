import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import { collectionsGQL } from "~gql/schema/collections"
import type { CollectionsOptions } from "~gql/types/graphql"
import { CompareDate } from "~helpers/compare-date"
import { setCollections } from "~store/slices/collections"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

import type { StoreJWT } from "./signin"

export const useCollections = () => {
  const { logoutWithNavigate } = useLogout()

  const dispatch = useDispatch()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const [mutate, { data, error, loading }] = useLazyQuery(collectionsGQL, {
    defaultOptions: {
      fetchPolicy: "network-only"
    }
  })

  const getCollections = async () => {
    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logoutWithNavigate()

      return
    }

    const options: CollectionsOptions = { collectionIds: null }

    return mutate({
      variables: { options },
      context: {
        headers: {
          Authorization: `Bearer ${token}`
        }
      },
      onCompleted: ({ collections }) => {
        dispatch(setCollections(collections))
      },
      onError: () => {
        navigateAndSetRedirect("/error")
      }
    })
  }

  return { data, error, loading, getCollections }
}
