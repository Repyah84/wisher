import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import { useParsUrl } from "~api/hooks/pars-url"
import { ItemAddGraphQL } from "~gql/hooks/item-add"
import { ItemsGraphQL } from "~gql/hooks/items"
import type { StoreJWT } from "~gql/hooks/signin"
import { ErrorLayout } from "~views/widgets/error-layout/error-layout"
import { LoaderLayout } from "~views/widgets/loader-layout/loader-layout"
import { WisherEmptyData } from "~views/widgets/wisher-empty-data/wisher-empty-data"
import { WisherLayout } from "~views/widgets/wisher-layout/wisher-layout"

export const AddWisherPage = () => {
  const navigate = useNavigate()

  const { mutate, isSuccess: addItemSuccess, isLoading } = ItemAddGraphQL()

  const {
    mutate: itemsMutate,
    isSuccess: itemsIsSuccess,
    isLoading: itemsUpdate
  } = ItemsGraphQL()

  const { data, isSuccess, isError, canceled, invalidate, cancel } =
    useParsUrl()

  const [wisherJWT] = useStorage<StoreJWT>(
    {
      key: "JWT",
      instance: new Storage({ area: "local" })
    },
    null
  )

  useEffect(() => {
    if (addItemSuccess && !itemsIsSuccess) {
      itemsMutate(wisherJWT.token)
    }

    if (itemsIsSuccess) {
      navigate("/wisher/wishes")
    }
  }, [addItemSuccess, itemsIsSuccess])

  const onSaveClick = () => {
    if (wisherJWT === null) {
      navigate("/login")

      return
    }

    mutate({ token: wisherJWT.token, input: data.input })
  }

  const onEditClick = () => {
    navigate("/wisher-edit")
  }

  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@", data, wisherJWT)

  return (
    <div className="extensions-wisher-add-wisher-page">
      {data === null && !canceled && !isError ? (
        <LoaderLayout cancelFn={cancel}>
          Importing data from domain.com <br /> Please wait.
        </LoaderLayout>
      ) : data || isSuccess ? (
        <WisherLayout
          data={data}
          isLoading={isLoading || itemsUpdate}
          onSaveClick={onSaveClick}
          onEditClick={onEditClick}
        />
      ) : canceled ? (
        <WisherEmptyData retryFn={invalidate} onEditClick={onEditClick} />
      ) : (
        <ErrorLayout retryFn={invalidate} />
      )}
    </div>
  )
}
