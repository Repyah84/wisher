import { useLazyQuery } from "@apollo/client"
import { useDispatch } from "react-redux"

import { Storage } from "@plasmohq/storage"

import type { StoreJWT } from "~background/messages/auth"
import { search } from "~gql/schema/search"
import { CompareDate } from "~helpers/compare-date"
import { resetSearchItems, setSearchItems } from "~store/slices/search"
import { useLogout } from "~views/hooks/logout"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"

export const useItemSearch = () => {
  const { logoutWithNavigate } = useLogout()

  const dispatch = useDispatch()

  const { navigateAndSetRedirect } = useNavigateWithRedirect()

  const [mutate, { data, error, loading }] = useLazyQuery(search, {
    defaultOptions: {
      fetchPolicy: "network-only"
    }
  })

  const getItems = async (
    search: string,
    offset = 0,
    limit = 10,
    resetData = false
  ) => {
    if (!search) {
      return
    }

    const storage = new Storage({ area: "local" })

    const { token, exp } = await storage.get<StoreJWT>("JWT")

    if (CompareDate(exp)) {
      logoutWithNavigate()

      return
    }

    return mutate({
      variables: {
        search,
        limit,
        offset
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
          setSearchItems({
            count: searchItems.count,
            items: searchItems.rows,
            param: search
          })
        )
      },
      onError: () => {
        navigateAndSetRedirect("/error")
      }
    })
  }

  return { data, error, loading, getItems }
}
