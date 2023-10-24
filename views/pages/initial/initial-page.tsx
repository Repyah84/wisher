import svgIcon from "data-base64:~assets/wisher-collection.svg"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Storage } from "@plasmohq/storage"

import { useGetItemsLazy } from "~gql/hooks/items.mutate"
import type { StoreJWT } from "~gql/hooks/signin.mutate"
import { useGetUserLazy } from "~gql/hooks/user"
import { Loader } from "~views/components/loader/loader"
import { Header } from "~views/widgets/header/header"

export const InitialPage = () => {
  const storage = new Storage({ area: "local" })

  const { getUser } = useGetUserLazy()

  const { getItems } = useGetItemsLazy()

  const navigate = useNavigate()

  useEffect(() => {
    storage.get<StoreJWT>("JWT").then((jwt) => {
      if (jwt) {
        Promise.all([getUser(), getItems()]).then(() => {
          navigate("/wisher/wishes")
        })

        return
      }

      navigate("/login")
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
