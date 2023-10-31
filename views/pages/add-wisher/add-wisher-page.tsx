import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { useParsUrl } from "~api/hooks/pars-url"
import { useItemMutate } from "~gql/hooks/item.mutate"
import { useGetItemsLazy } from "~gql/hooks/items"
import type { RootState } from "~store/wisher.store"
import { ErrorLayout } from "~views/widgets/error-layout/error-layout"
import { LoaderLayout } from "~views/widgets/loader-layout/loader-layout"
import { WisherEmptyData } from "~views/widgets/wisher-empty-data/wisher-empty-data"
import { WisherLayout } from "~views/widgets/wisher-layout/wisher-layout"

export const AddWisherPage = () => {
  const navigate = useNavigate()

  const user = useSelector(({ user: { data } }: RootState) => data)

  const { loading, addItem } = useItemMutate()

  const { data, isSuccess, isError, canceled, invalidate, cancel } =
    useParsUrl()

  const { loading: itemsLoading, getItems } = useGetItemsLazy()

  const onSaveClick = () => {
    if (user === null) {
      navigate("/login")

      return
    }

    if (loading || itemsLoading) {
      return
    }

    addItem({ input: data.input, image: data.imageUpload })
      .then(() => {
        return getItems(10, true)
      })
      .then(() => {
        navigate("/wisher/wishes/wishes-all")
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
