import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import { useParsUrl } from "~api/hooks/pars-url"
import { ItemAddGraphQL } from "~gql/hooks/item-add"
import type { StoreJWT } from "~gql/hooks/signin"
import type { ItemInput } from "~gql/types/graphql"
import { ErrorLayout } from "~views/widgets/error-layout/error-layout"
import { LoaderLayout } from "~views/widgets/loader-layout/loader-layout"
import { WisherEmptyData } from "~views/widgets/wisher-empty-data/wisher-empty-data"
import { WisherLayout } from "~views/widgets/wisher-layout/wisher-layout"

export const AddWisherPage = () => {
  const navigate = useNavigate()

  const { mutate, isSuccess: addItemSuccess, isLoading } = ItemAddGraphQL()

  const { data, isSuccess, isError, canceled, invalidate, cancel } =
    useParsUrl()

  const [wisherJWT] = useStorage<StoreJWT>(
    {
      key: "JWT",
      instance: new Storage({ area: "local" })
    },
    null
  )

  const onSaveSlick = () => {
    if (wisherJWT === null) {
      navigate("/login")
    }

    const { price, priceCurrency, description, image } = data

    const input: ItemInput = {
      price,
      currency: priceCurrency,
      title: description,
      imageUrl: image[0],
      url: window.location.href
    }

    mutate({ token: wisherJWT.token, input })
  }

  useEffect(() => {
    if (!addItemSuccess) {
      return
    }

    navigate("/wisher/wishes")
  }, [addItemSuccess])

  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@", data, wisherJWT)

  return (
    <div className="extensions-wisher-add-wisher-page">
      {!isSuccess && !isError ? (
        <LoaderLayout cancelFn={cancel}>
          Importing data from domain.com <br /> Please wait.
        </LoaderLayout>
      ) : isSuccess ? (
        <WisherLayout
          isLoading={isLoading}
          data={data}
          onSaveClick={onSaveSlick}
        />
      ) : canceled ? (
        <WisherEmptyData retryFn={invalidate} />
      ) : (
        <ErrorLayout retryFn={invalidate} />
      )}
    </div>
  )
}
