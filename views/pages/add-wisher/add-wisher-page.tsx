import { useNavigate } from "react-router-dom"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import { useParsUrl } from "~api/hooks/pars-url"
import { useItemMutate } from "~gql/hooks/item.mutate"
import { useGetItemsLazy } from "~gql/hooks/items"
import type { StoreJWT } from "~gql/hooks/signin"
import { ErrorLayout } from "~views/widgets/error-layout/error-layout"
import { LoaderLayout } from "~views/widgets/loader-layout/loader-layout"
import { WisherEmptyData } from "~views/widgets/wisher-empty-data/wisher-empty-data"
import { WisherLayout } from "~views/widgets/wisher-layout/wisher-layout"

export const AddWisherPage = () => {
  const navigate = useNavigate()

  const { loading, addItem } = useItemMutate()

  const { data, isSuccess, isError, canceled, invalidate, cancel } =
    useParsUrl()

  const { loading: itemsLoading, getItems } = useGetItemsLazy()

  const [wisherJWT] = useStorage<StoreJWT>(
    {
      key: "JWT",
      instance: new Storage({ area: "local" })
    },
    null
  )

  const onSaveClick = () => {
    if (loading || itemsLoading) {
      return
    }

    if (wisherJWT === null) {
      navigate("/login")

      return
    }

    addItem({ input: data.input, image: data.imageUpload }).then(() => {
      getItems().then(() => {
        navigate("/wisher/wishes")
      })
    })
  }

  const onEditClick = () => {
    navigate("/wisher-edit")
  }

  return (
    <div className="extensions-wisher-add-wisher-page">
      {data === null && !canceled && !isError ? (
        <LoaderLayout cancelFn={cancel}>
          Importing data from domain.com <br /> Please wait.
        </LoaderLayout>
      ) : data || isSuccess ? (
        <WisherLayout
          data={data}
          isLoading={loading || itemsLoading}
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
