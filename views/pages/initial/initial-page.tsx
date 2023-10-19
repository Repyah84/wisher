import svgIcon from "data-base64:~assets/wisher-collection.svg"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Storage } from "@plasmohq/storage"

import type { StoreJWT } from "~gql/hooks/signin"
import { useUserGraphQL } from "~gql/hooks/user"
import { Loader } from "~views/components/loader/loader"
import { Header } from "~views/widgets/header/header"

export const InitialPage = () => {
  const storage = new Storage({ area: "local" })

  const { mutate, isSuccess, isError } = useUserGraphQL()

  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      return
    }

    storage.get<StoreJWT>("JWT").then((data) => {
      if (data) {
        mutate(data.token)

        return
      }

      navigate("/login")
    })
  }, [isError])

  useEffect(() => {
    if (isSuccess) {
      navigate("/wisher/wishes")
    }
  }, [isSuccess])

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
