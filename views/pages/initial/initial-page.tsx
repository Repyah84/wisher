import svgIcon from "data-base64:~assets/wisher-collection.svg"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Storage } from "@plasmohq/storage"

import { ItemsGraphQL } from "~gql/hooks/items"
import type { StoreJWT } from "~gql/hooks/signin"
import { useUserGraphQL } from "~gql/hooks/user"
import { Loader } from "~views/components/loader/loader"
import { Header } from "~views/widgets/header/header"

export const InitialPage = () => {
  const storage = new Storage({ area: "local" })

  const { mutate, isSuccess } = useUserGraphQL()

  const { mutate: itemsMutate, isSuccess: itemsIsSuccess } = ItemsGraphQL()

  const navigate = useNavigate()

  useEffect(() => {
    storage.get<StoreJWT>("JWT").then((data) => {
      if (data) {
        console.log(data)
        const token = data.token

        mutate(token)
        itemsMutate(token)

        return
      }

      navigate("/login")
    })
  }, [])

  useEffect(() => {
    if (isSuccess && itemsIsSuccess) {
      navigate("/wisher/wishes")
    }
  }, [isSuccess, itemsIsSuccess])

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
