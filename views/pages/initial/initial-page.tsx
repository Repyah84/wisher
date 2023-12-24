import svgIcon from "data-base64:~assets/wisher-collection.svg"
import { useContext, useEffect } from "react"

import { Storage } from "@plasmohq/storage"

import type { StoreJWT } from "~background/messages/auth"
import { useCollections } from "~gql/hooks/collections"
import { useGetItemsLazy } from "~gql/hooks/items"
import { useGetUserLazy } from "~gql/hooks/user"
import { Loader } from "~views/components/loader/loader"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useAsyncStoreDataWithContext } from "~views/hooks/async-store-data"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"
import { Header } from "~views/widgets/header/header"

export const InitialPage = () => {
  const { setWisherState } = useContext(WisherStateContext)

  const { navigate, navigateWithRedirect } = useNavigateWithRedirect()

  const { getUser } = useGetUserLazy()
  const { getItems } = useGetItemsLazy()
  const { getCollections } = useCollections()

  const { initialDataByStore, initDataByBackground } =
    useAsyncStoreDataWithContext()

  useEffect(() => {
    Promise.all([initialDataByStore(), initDataByBackground()])
      .then(() => {
        return new Storage({ area: "local" }).get<StoreJWT>("JWT")
      })
      .then((jwt) => {
        if (!jwt) {
          navigate("/login")

          setWisherState((wisher) => ({ ...wisher, hasBadge: true }))

          return
        }

        Promise.all([getUser(), getItems(), getCollections()]).then(() => {
          setWisherState((wisher) => ({ ...wisher, hasBadge: true }))

          navigateWithRedirect("/wisher/wishes/wishes-all")
        })
      })
  }, [])

  return (
    <div className="extensions-wisher-initial-page">
      <Header></Header>

      <main className="extensions-wisher-initial-page__main">
        <img width={104} height={104} src={svgIcon} alt="empty" />

        <Loader isLoading={true} />

        <p className="extensions-wisher-initial-page__title">
          Initial data. Please wait
        </p>
      </main>
    </div>
  )
}
