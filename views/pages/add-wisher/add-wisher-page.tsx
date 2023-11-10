import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { useParsUrl } from "~api/hooks/pars-url"
import { useItemMutate } from "~gql/hooks/item.mutate"
import { useGetItemsLazy } from "~gql/hooks/items"
import { resetCollectionsWithImages } from "~store/slices/collections-with-images"
import type { RootState } from "~store/wisher.store"
import { WisherStateContext } from "~views/context/wisher/wisher.context"
import { useNavigateWithRedirect } from "~views/hooks/navigate-with-redirect"
import { ErrorLayout } from "~views/widgets/error-layout/error-layout"
import { LoaderLayout } from "~views/widgets/loader-layout/loader-layout"
import { WisherEmptyData } from "~views/widgets/wisher-empty-data/wisher-empty-data"
import { WisherLayout } from "~views/widgets/wisher-layout/wisher-layout"

export const AddWisherPage = () => {
  const {
    wisherSate: { isShow },
    setWisherState
  } = useContext(WisherStateContext)

  const { navigate, navigateAndSetRedirect } = useNavigateWithRedirect()

  const { data, isSuccess, isError, canceled, invalidate, cancel } =
    useParsUrl()

  const dispatch = useDispatch()

  const user = useSelector(({ user: { data } }: RootState) => data)

  const { loading, addItem } = useItemMutate()

  const { loading: itemsLoading, getItems } = useGetItemsLazy()

  useEffect(() => {
    if (data === null || isShow) {
      return
    }

    setWisherState((wisher) => ({ ...wisher, isShow: true }))
  }, [data])

  const onSaveClick = () => {
    if (user === null) {
      navigateAndSetRedirect("/login")

      return
    }

    if (loading || itemsLoading) {
      return
    }

    setWisherState((wisher) => ({
      ...wisher,
      isShow: false,
      hasMessage: null
    }))

    addItem({ input: data.input, image: data.imageUpload })
      .then(() => {
        return getItems(10, true)
      })
      .then(() => {
        dispatch(resetCollectionsWithImages())

        setWisherState((wisher) => ({
          ...wisher,
          snackbar: {
            title: "Perfect! We've saved your wish securely in the wishlist.",
            action: true
          }
        }))

        navigate("/wisher/wishes/wishes-all")
      })
  }

  const onHidePopup = () => {
    setWisherState((wisher) => ({ ...wisher, isShow: false }))
  }

  const onEditClick = () => {
    navigateAndSetRedirect("/wisher-edit")
  }

  return (
    <div className="extensions-wisher-add-wisher-page">
      {data === null && !canceled && !isError ? (
        <LoaderLayout cancelFn={cancel} hideFn={onHidePopup}>
          Importing data from domain.com <br />
          Kindly wait. Alternatively, you can close this dialog, and we'll
          notify you once the process is complete.
        </LoaderLayout>
      ) : data || isSuccess ? (
        <WisherLayout
          user={user}
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
