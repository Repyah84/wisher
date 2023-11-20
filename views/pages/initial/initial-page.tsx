import svgIcon from "data-base64:~assets/wisher-collection.svg"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Storage } from "@plasmohq/storage"

import { useGetItemsLazy } from "~gql/hooks/items"
import type { StoreJWT } from "~gql/hooks/signin"
import { useGetUserLazy } from "~gql/hooks/user"
import { Loader } from "~views/components/loader/loader"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useAsyncStoreDataWithContext } from "~views/hooks/async-store-data"
import { Header } from "~views/widgets/header/header"

export const InitialPage = () => {
  const { setWisherState } = useContext(WisherStateContext)

  const navigate = useNavigate()

  const { getUser } = useGetUserLazy()
  const { getItems } = useGetItemsLazy()

  const { initialDataByStore, initDataByBackground } =
    useAsyncStoreDataWithContext()

  useEffect(() => {
    Promise.all([initialDataByStore(), initDataByBackground()])
      .then(() => {
        return new Storage({ area: "local" }).get<StoreJWT>("JWT")
      })
      .then((jwt) => {
        if (!jwt) {
          console.log("InitialPage", jwt)

          navigate("/login")

          setWisherState((wisher) => ({ ...wisher, hasBadge: true }))

          return
        }

        return getUser()
          .then(() => {
            return getItems()
          })
          .then(() => {
            setWisherState((wisher) => ({ ...wisher, hasBadge: true }))

            navigate("/wisher/wishes/wishes-all")
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
